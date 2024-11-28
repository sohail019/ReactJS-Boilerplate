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

  const handleFormSubmit = (data: any) => {
    onSubmit(data); // Call the onSubmit prop to handle submission logic
    reset(); // Reset the form fields after submission
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
          {fields.map((field, index) => (
            <Box key={index} sx={{ gridColumn: `span ${field.columnSpan || 1}` }}>
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
            </Box>
          ))}
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
