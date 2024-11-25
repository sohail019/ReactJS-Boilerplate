import { useState } from "react"


const validatEmail = (email:  string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

const validatePassword = (password: string) => {
    return password.length >= 6
} 

const useFormValidation = (initialValues: { [key: string]: string}) => {
    const[values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState<{ [key: string]: string}>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = () => {
        const newErrors: { [key: string]: string} = {}

        if(!validatEmail(values.email)) {
            newErrors.email = 'Invalid email'
    }

    if(!validatePassword(values.password)) {

        newErrors.password = 'Password must be at least 6 characters'
    }

    return newErrors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formErrors = validate()
        if(Object.keys(formErrors).length === 0) {
            setIsSubmitting(true)

            setTimeout(() => {
                alert("Form Submitted")
                setIsSubmitting(false)
            }, 2000)
        } else {
            setErrors(formErrors)
        }
    }

    return {values, errors, isSubmitting, handleChange, handleSubmit} 
}

export default useFormValidation
