import { useState } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e, validationService, setErrors) => {
        const { name, value } = e.target;
        setFormValues(state => ({ ...state, [name]: value }));
        if (validationService) {
            validationService({ [name]: value }, setErrors);
        }
    };

    return [
        formValues,
        onChangeHandler,
    ];
}