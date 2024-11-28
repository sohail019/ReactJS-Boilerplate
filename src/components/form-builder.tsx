import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
interface FieldConfig {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: {value: string; label: string}[]; //? for dropdown
  required?: boolean;
//  ? bhai it was just for testing 
//   validation?: {
//     type?: 'email';
//     minLength?: number;
//     maxLength?: number;
//     regex?: RegExp;
//   };
validation: z.ZodType<any> 
}

interface FormBuilderProps {
  config: FieldConfig[];
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
          <label htmlFor={field.name}>{field.label}</label>
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
