import FormBuilder from '../components/form-builder';
import { z } from 'zod';

const FormPage = () => {
  const formConfig = {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        validation: z.string().min(2, 'First Name must be at least 2 characters'),
        columnSpan: 6,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        validation: z.string().min(2, 'Last Name must be at least 2 characters'),
        columnSpan: 6,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        validation: z.string().email('Invalid email'),
        columnSpan: 12,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        validation: z.string().min(6, 'Password must be at least 6 characters long'),
        columnSpan: 12,
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ],
        validation: z.enum(['male', 'female', 'other']),
        columnSpan: 6,
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { label: 'India', value: 'india' },
          { label: 'USA', value: 'usa' },
          { label: 'United Kingdom', value: 'uk' },
        ],
        validation: z.string().min(1, 'Please select a country'),
        columnSpan: 6,
      },
      {
        name: 'hobbies',
        label: 'Hobbies',
        type: 'checkbox',
        options: [
          { value: 'coding', label: 'Coding' },
          { value: 'reading', label: 'Reading' },
          { value: 'singing', label: 'Singing' },
          { value: 'dancing', label: 'Dancing' },
        ],
        validation: z.array(z.string()).min(1, 'Please select at least one hobby'),
      },
    ],
    onSubmit: (data: any) => {
      alert(`Form Submitted of ${data.email}`);
      console.log('Form Data:', data);
    }
  };

  return (
      <FormBuilder {...formConfig} />
  );
};

export default FormPage;
