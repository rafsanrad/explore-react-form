import { useState } from "react";


const useInputField = (defaultValue) => {
    const [fieldValue,setFeildValue]=useState(defaultValue)
    const handleFieldOnChange=(e)=>{
        setFeildValue(e.target.value);
    }
    return [fieldValue,handleFieldOnChange]
};

export default useInputField;