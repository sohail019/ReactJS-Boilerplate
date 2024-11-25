import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import useFormValidation from "../../hooks/forms/use-form-validation";

const FormValidation = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation({
    email: '',
    password: '',
  });

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormValidation;
