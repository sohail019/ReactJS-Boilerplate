import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface FieldOption {
  label: string;
  value: string | number;
}

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  options?: FieldOption[];
  validation?: ZodType;
  columnSpan?: number;
  style?: React.CSSProperties;
  conditionalRender?: {
    dependsOn: string;
    value: any;
  };
}

interface FormConfig {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
}

const FormBuilder: React.FC<FormConfig> = ({ fields, onSubmit }) => {
  const schema = z.object(
    fields.reduce(
      (acc, field) => {
        acc[field.name] = field.validation || z.string();
        return acc;
      },
      {} as Record<string, ZodType>,
    ),
  );

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce(
      (acc, field) => {
        acc[field.name] = field.type === 'checkbox' ? (field.options ? [] : false) : '';
        return acc;
      },
      {} as Record<string, any>,
    ),
  });

  const fieldValues = watch();

  const handleFormSubmit = (data: any) => {
    onSubmit(data); 
    reset(); 
  };

  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        mt: 4,
        mb: 4,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Form Builder
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
          }}
        >
          {fields.map((field, index) => {
            const shouldRender = (() => {
              const condition = field.conditionalRender;
              if (!condition) return true;

              const dependentValue = fieldValues[condition.dependsOn];

              //? for checkbox condition because it saves in array
              if (Array.isArray(dependentValue)) {
                return dependentValue.includes(condition.value);
              }
              return dependentValue === condition.value;
            })();

            if (!shouldRender) return null;

            return (
              <Box key={index} sx={{ gridColumn: `span ${field.columnSpan || 1}` }}>
                {field.type === 'typography' ? (
                  <Typography sx={{ ...field.style }}>{field.label}</Typography>
                ) : (
                  <Controller
                    name={field.name}
                    control={control}
                    render={({ field: controllerField }) => {
                      switch (field.type) {
                        case 'text':
                        case 'email':
                        case 'password':
                          return (
                            <TextField
                              {...controllerField}
                              label={field.label}
                              type={field.type}
                              fullWidth
                              error={!!errors[field.name]}
                              helperText={errors[field.name]?.message?.toString()}
                            />
                          );
                        case 'select':
                          return (
                            <FormControl fullWidth>
                              <InputLabel>{field.label}</InputLabel>
                              <Select {...controllerField} label={field.label}>
                                {field.options?.map(option => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          );
                        case 'radio':
                          return (
                            <FormControl>
                              <Typography>{field.label}</Typography>
                              <RadioGroup {...controllerField}>
                                {field.options?.map(option => (
                                  <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          );
                        case 'checkbox':
                          if (!field.options) {
                            return (
                              <FormControlLabel
                                control={
                                  <Checkbox {...controllerField} checked={controllerField.value} />
                                }
                                label={field.label}
                              />
                            );
                          }
                          return (
                            <Box>
                              <Typography>{field.label}</Typography>
                              {field.options?.map(option => (
                                <FormControlLabel
                                  key={option.value}
                                  control={
                                    <Checkbox
                                      value={option.value}
                                      checked={controllerField.value.includes(option.value)}
                                      onChange={e => {
                                        const newValues = e.target.checked
                                          ? [...controllerField.value, option.value]
                                          : controllerField.value.filter(
                                              (v: any) => v !== option.value,
                                            );
                                        controllerField.onChange(newValues);
                                      }}
                                    />
                                  }
                                  label={option.label}
                                />
                              ))}
                            </Box>
                          );
                        default:
                          return <></>;
                      }
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
          <Button type="button" variant="outlined" color="secondary" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormBuilder;
