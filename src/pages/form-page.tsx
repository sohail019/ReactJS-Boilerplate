  import { z } from 'zod';
  import FormBuilder from '../components/form-builder';

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
          columnSpan: 12,
        },
        {
          name: 'male',
          label: 'Do You Believe in Alien? Why or Why not?',
          type: 'text',
          conditionalRender: {
            dependsOn: 'gender',
            value: 'male',
          },
          columnSpan: 12,
        },
        {
          name: 'female',
          label: 'Do you ever look in the mirror and wonder how you managed to look so good?',
          type: 'text',
          conditionalRender: {
            dependsOn: 'gender',
            value: 'female',
          },
          columnSpan: 12,
        },
        {
          name: 'other',
          label: 'Ahh! Please choose one gender from above options',
          type: 'typography',
          style: {
            color: 'red',
            marginTop: '10px',
            fontSize: '20px',
          },
          conditionalRender: {
            dependsOn: 'gender',
            value: 'other',
          },
          columnSpan: 12,
        },
        {
          name: 'hobbies',
          label: 'Hobbies',
          type: 'checkbox',
          options: [
            { value: 'coding', label: 'Coding' },
            { value: 'dancing', label: 'Dancing' },
          ],
          validation: z.array(z.string()).min(1, 'Please select at least one hobby'),
          columnSpan: 4,
        },
        {
          name: 'language',
          label: 'Favorite Programming Language?',
          type: 'radio',
          options: [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'java', label: 'Java' },
            { value: 'python', label: 'Python' },
            { value: 'dart', label: 'Dart' },
          ],
          conditionalRender: {
            dependsOn: 'hobbies',
            value: 'coding',
          },
          columnSpan: 4,
        },
        {
          name: 'javascript-framework',
          label: 'JavaScript Framework?',
          type: 'select',
          options: [
            { value: 'react', label: 'ReactJS' },
            { value: 'angular', label: 'Angular' },
            { value: 'vue', label: 'VueJS' },
            { value: 'node', label: 'NodeJS' },
          ],
          conditionalRender: {
            dependsOn: 'language',
            value: 'javascript',
          },
          columnSpan: 4,
        },
        {
          name: 'python-framework',
          label: 'Framework?',
          type: 'select',
          options: [
            { value: 'django', label: 'DJango' },
            { value: 'flask', label: 'Flask' },
            { value: 'tensorflow', label: 'TensorFlow' },
          ],
          conditionalRender: {
            dependsOn: 'language',
            value: 'python',
          },
          columnSpan: 4,
        },
        {
          name: 'java',
          label: 'Ooops why you choosed Java?',
          type: 'text',
          conditionalRender: {
            dependsOn: 'language',
            value: 'java',
          },
          columnSpan: 12,
        },
        {
          name: 'dart',
          label: 'Ahh! Dart is awesome.. drop some comments',
          type: 'text',
          conditionalRender: {
            dependsOn: 'language',
            value: 'dart',
          },
          columnSpan: 12,
        },
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          options: [
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
          ],
          validation: z.string().min(1, 'Please select a country'),
          columnSpan: 12,
        },
        {
          name: 'state',
          label: 'State',
          type: 'select',
          options: [
            { label: 'Maharashtra', value: 'maharastra' },
            { label: 'Rajasthan', value: 'rajasthan' },
            { label: 'Gujarat', value: 'gujarat' },
          ],
          conditionalRender: {
            dependsOn: 'country',
            value: 'india',
          },
          columnSpan: 6,
        },
        {
          name: 'city',
          label: 'City',
          type: 'select',
          options: [
            { label: 'Mumbai', value: 'mumbai' },
            { label: 'Pune', value: 'pune' },
            { label: 'Nagpur', value: 'nagpur' },
          ],
          conditionalRender: {
            dependsOn: 'state',
            value: 'maharastra',
          },
          columnSpan: 6,
        },
        {
          name: 'rajasthan-text',
          label: 'Ahh! Get some water first :(',
          style: {
            color: 'red',
            marginTop: '10px',
            fontSize: '20px',
          },
          type: 'typography',
          conditionalRender: {
            dependsOn: 'state',
            value: 'rajasthan',
          },
          columnSpan: 6,
        },
        {
          name: 'gujarat-text',
          label: 'Kem Cho Mota Bhai? xD',
          style: {
            color: 'green',
            marginTop: '10px',
            fontSize: '20px',
          },
          type: 'typography',
          conditionalRender: {
            dependsOn: 'state',
            value: 'gujarat',
          },
          columnSpan: 6,
        },
      ],
      onSubmit: data => {
        console.log('Form Submitted:', data);
        alert(JSON.stringify(data)); 
      },
    };

    return <FormBuilder {...formConfig} />;
  };

  export default FormPage;
