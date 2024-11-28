
interface FieldConfig {
    name: string;
    type: "email" | "password" | "text";
    label: string;
    placeholder?: string;
    required?: boolean 
}

interface FormBuilderProps {
    config: FieldConfig[]
}

const FormBuilder: React.FC<FormBuilderProps> = ({config}) => {
    return (
      <form>
        {config.map(field => (
          <div key={field.name} style={{ marginBottom: '16px' }}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              style={{ display: 'block', marginTop: '8px', width: '100%' }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
} 

export default FormBuilder