import React, { useEffect, useState } from 'react'

const useForm = (initialFieldValues, setCurrentId) => {
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        const {id, value} = e.target;
        setValues({
            ...values,
            [id]: value
        })
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        handleInputChange,
        resetForm
    };
}

export default useForm;