import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
   
    
    const [formSate, setFormState] = useState(initialForm);

    const onInputChange = (e) => {
        const {name, value } = e.target 
            setFormState({
            ...formSate,
            [ name ] : value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formSate,
        formSate,
        onInputChange,
        onResetForm: onResetForm
    }
}


