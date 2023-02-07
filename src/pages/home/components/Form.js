import "../styles/Form.css"
import { useState } from "react";



const Form = () => {
    const [details, seDetails] = useState({
        firstName: "",
        lastName: "",
        phoneNumber:"",
        email: "",
        password:"",
        confirmPassword:""
    })

    return(
            <div>
                
            </div>
    )
}

export default Form;