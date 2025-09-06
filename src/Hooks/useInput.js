import { useState } from "react"



const useInput = (valid) => {

    const [name, setName] = useState('')
    const [touch, setTouch] = useState(false)

    const isValid = valid(name)


    const invalid = touch === true && name === ''
    // console.log(name.trim() != '' && 'cabdisamad');

    const inputHandler = (e) => {
        setName(e.target.value)
    }
    
    const BlurHandler = () => {
        setTouch(true)
    }

    const ResetInput = () => {
        setName('')
        setTouch(false)
    }

    return(
        {
            name,
            touch,
            isValid,
            invalid,
            inputHandler,
            BlurHandler,
            ResetInput,
        }
    )


}

export default useInput