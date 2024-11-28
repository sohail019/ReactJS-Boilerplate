import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
interface FieldConfig {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[]; //? for dropdown
  required?: boolean;
  //  ? bhai it was just for testing
  //   validation?: {
  //     type?: 'email';
  //     minLength?: number;
  //     maxLength?: number;
  //     regex?: RegExp;
  //   };
  validation: z.ZodType<any>;
}

interface FormBuilderProps {
  config: FieldConfig[];
  onSubmit: (data: any) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ config, onSubmit }) => {
  const validationSchema = z.object(
    config.reduce(
      (schema, field) => {
        schema[field.name] = field.validation;
        return schema;
      },
      {} as Record<string, z.ZodTypeAny>,
    ),
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.map(field => (
        <div key={field.name} style={{ marginBottom: '1rem' }}>
          <label>{field.label}</label>
          {field.type === 'select' && field.options ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <select {...controllerField}>
                  <option value="">Select an option</option>
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          ) : field.type === 'radio' && field.options ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <div>
                  {field.options.map(option => (
                    <label key={option.value}>
                      <input
                        {...controllerField}
                        type="radio"
                        value={option.value}
                        checked={controllerField.value === option.value}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            />
          ) : field.type === 'checkbox' && field.options ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <div>
                  {field.options.map(option => (
                    <label key={option.value}>
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={controllerField.value?.includes(option.value)}
                        onChange={e => {
                          const newValue = e.target.checked
                            ? [...(controllerField.value || []), option.value]
                            : controllerField.value?.filter((v: string) => v !== option.value);
                          controllerField.onChange(newValue);
                        }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            />
          ) : field.type === 'date' ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <input {...controllerField} type="date" id={field.name} />
              )}
            />
          ) : (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <input {...controllerField} type={field.type} id={field.name} />
              )}
            />
          )}
          {errors[field.name] && (
            <p style={{ color: 'red' }}>{errors[field.name]?.message as string}</p>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBuilder;
