import { z } from "zod";
import FormBuilder from "../components/form-builder";

const FormPage: React.FC = () => {
    const formConfig = [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        validation: z.string().min(3, 'Username must be at least 3 characters long'),
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        validation: z.string().email('Invalid email'),
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        validation: z.string().min(6, 'Password must be at least 6 characters long'),
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { value: 'in', label: 'India' },
          { value: 'us', label: 'United States of America' },
          { value: 'uk', label: 'United Kingdom' },
        ],
        validation: z.string().min(1, 'Please select a country'),
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: z.string().min(1, 'Please select your gender'),
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
      {
        name: 'dob',
        label: 'Date of Birth',
        type: 'date', 
        validation: z.string().min(1, 'Please select your date of birth'),
      },
    ];

    const handleFormSubmit = (data: any) => {
        alert(`Form Submitted for ${data.email}`);
      console.log('Form Data:', data);
    };

    return <FormBuilder config={formConfig} onSubmit={handleFormSubmit} />;
}

export default FormPage