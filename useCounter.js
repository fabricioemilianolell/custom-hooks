import { useState } from "react"


export const UseCounter = (inicialValue = 10 ) => {

    const [counter, setCounter] = useState(inicialValue)

    const incrementar = (value = 1) => {
        setCounter(counter + value) 
    }

    const decrementar = () => {
        setCounter(counter - 1)
        if(counter === 0) {
            setCounter(10)
        }
        
    }

    const reset = () => {
        setCounter(inicialValue)
    }

    return {
        counter,
        incrementar,
        decrementar,
        reset
    }


    
}