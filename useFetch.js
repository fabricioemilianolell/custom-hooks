import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })
 
    const getFech = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json();
        
        setState({
            data: data,
            isLoading: false,
            error: null
        })
    }
    

    useEffect(() => {
        getFech();
     
    }, [url])
    
    
    
    return state; //state es un objeto
}
