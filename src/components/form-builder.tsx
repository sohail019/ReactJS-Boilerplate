import React, { useState } from 'react';
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
  LinearProgressWithLabel,
  LinearProgress,
  IconButton,
} from '@mui/material';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Cancel, Delete } from '@mui/icons-material';

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
  multiple?: boolean; 
  maxSize?: number; 
  allowedFormats?: string[]; 
}

interface FormConfig {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
}

const FormBuilder: React.FC<FormConfig> = ({ fields, onSubmit }) => {
  const schema = z.object(
    fields.reduce(
      (acc, field) => {
        acc[field.name] = field.validation || z.any();
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
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadPreviews, setUploadPreviews] = useState<Record<string, string[]>>({});
  const [cancelUpload, setCancelUpload] = useState<Record<string, boolean>>({});
  const [completedUploads, setCompletedUploads] = useState<Record<string, boolean>>({});

  const handleFileValidation = (
    files: FileList | null,
    field: FieldConfig,
  ): { validFiles: File[]; errors: string[] } => {
    if (!files) return { validFiles: [], errors: [] };

    const errors: string[] = [];
    const validFiles: File[] = [];

    Array.from(files).forEach(file => {
      if (field.allowedFormats && !field.allowedFormats.includes(file.type)) {
        errors.push(`File ${file.name} has an invalid format.`);
        return;
      }
      if (field.maxSizeMB && file.size > field.maxSizeMB * 1024 * 1024) {
        errors.push(`File ${file.name} exceeds the size limit of ${field.maxSizeMB} MB.`);
        return;
      }
      validFiles.push(file);
    });

    return { validFiles, errors };
  };

  const simulateFileUpload = (fieldName: string, files: File[]) => {
    files.forEach(file => {
      setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
      setCancelUpload(prev => ({ ...prev, [fieldName]: false }));
      setCompletedUploads(prev => ({ ...prev, [fieldName]: false })); 

      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[fieldName] ?? 0;

          if (currentProgress >= 100 || cancelUpload[fieldName]) {
            clearInterval(interval);

            if (cancelUpload[fieldName]) {
              setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
              
            } else {
              alert(`${file.name} uploaded successfully!`);
              setCompletedUploads(prev => ({ ...prev, [fieldName]: true })); 
            }

            return prev;
          }

          return { ...prev, [fieldName]: currentProgress + 10 }; 
        });
      }, 200);
    });
  };

  const handleFileInputChange = (
    field: FieldConfig,
    files: FileList | null,
    controllerField: any,
  ) => {
    const { validFiles, errors } = handleFileValidation(files, field);

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    if (validFiles.length > 0) {
      const previews = validFiles.map(file => URL.createObjectURL(file));
      setUploadPreviews(prev => ({
        ...prev,
        [field.name]: field.multiple ? [...(prev[field.name] || []), ...previews] : previews,
      }));

      simulateFileUpload(field.name, validFiles);
    }

    controllerField.onChange(field.multiple ? validFiles : validFiles[0] || null);
  };

  const handleDeleteFile = (field: FieldConfig, index: number) => {
    setUploadPreviews(prev => {
      const updatedPreviews = [...(prev[field.name] || [])];
      updatedPreviews.splice(index, 1);
      if (updatedPreviews.length === 0) {
        setCompletedUploads(prev => ({ ...prev, [field.name]: false }));
        setUploadProgress(prev => ({ ...prev, [field.name]: 0 }));
      }

      return { ...prev, [field.name]: updatedPreviews };
    });
  };

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
                        case 'file':
                          return (
                            <Box>
                              <Typography>{field.label}</Typography>
                              <input
                                type="file"
                                multiple={field.multiple}
                                onChange={e =>
                                  handleFileInputChange(field, e.target.files, controllerField)
                                }
                              />
                              {uploadPreviews[field.name] &&
                                uploadPreviews[field.name].map((preview, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}
                                  >
                                    <img
                                      src={preview}
                                      alt={`Preview ${idx + 1}`}
                                      style={{ maxWidth: '200px', marginRight: '10px' }}
                                    />
                                    <IconButton
                                      onClick={() => handleDeleteFile(field, idx)}
                                      color="error"
                                    >
                                      <Delete />
                                    </IconButton>
                                  </Box>
                                ))}
                              {uploadProgress[field.name] !== undefined &&
                                !completedUploads[field.name] &&
                                uploadPreviews[field.name]?.length > 0 && ( 
                                  <Box display="flex" alignItems="center" gap={2} mt={1}>
                                    <LinearProgress
                                      variant="determinate"
                                      value={uploadProgress[field.name]}
                                      sx={{ flex: 1 }}
                                    />
                                    <IconButton
                                      onClick={() =>
                                        setCancelUpload(prev => ({ ...prev, [field.name]: true }))
                                      }
                                      color="error"
                                    >
                                      <Cancel />
                                    </IconButton>
                                  </Box>
                                )}
                            </Box>
                          );
                        default:
                          return null;
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