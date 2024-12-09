import { useState, useEffect } from 'react';

const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [formComplete, setFormComplete] = useState(false);

    const handleChange = (name) => (value) => {
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (validators) => {
        const isValid = Object.keys(validators).every((key) => validators[key](formValues[key]));
        setFormComplete(isValid);
    };

    return { formValues, handleChange, formComplete, validateForm };
};