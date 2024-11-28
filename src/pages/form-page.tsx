import FormBuilder from "../components/form-builder";

const FormPage: React.FC = () => {
    const formConfig = [
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email',
        required: true,
        validation: {
          type: 'email',
        },
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
        validation: {
          minLength: 6,
          maxLength: 20,
        },
      },
      {
        name: 'about',
        type: 'text',
        label: 'About You',
        placeholder: 'Tell us about yourself',
        required: false,
        validation: {
          maxLength: 200,
        },
      },
    ];

    return <FormBuilder config={formConfig} />
}

export default FormPage