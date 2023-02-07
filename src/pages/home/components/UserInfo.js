import React, {useState} from React;


const UserInfo = () => {
    const[info, setInfo] = useState({
        firstName:"",
        lastName:"",
        gender:"",
        phoneNumber:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleSubmit = () => {

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                onChange={(e) =>setInfo({...info, firstName:e.target.value})}
                 />
            </form>
        </div>
    )
}

