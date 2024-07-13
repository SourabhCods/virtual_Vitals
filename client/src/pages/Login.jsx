import { TextField , Button} from "@mui/material"
import { useState } from "react"
import './signUp.css'

const Login = () => {
    let [formData , setFormData] = useState({
        emailOrPhone : '',
        password : ''
    })

    const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return(
        <>
            <div className="signUp-form">
                <p style={{fontSize : '2rem ' , textAlign : 'center'}}>Login</p>
                <form onSubmit={onFormSubmit}>
                    <TextField
                        className="input-fields"                        
                        variant="outlined"
                        label = 'Email or Phone'
                        name="emailOrPhone"
                        value={formData.emailOrPhone}
                        onChange={handleOnChange}

                    >
                    </TextField>

                    <TextField
                        className="input-fields"
                        variant="outlined"
                        label = 'Password'
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}

                    >
                    </TextField>

                    <Button 
                        className='input-fields'
                        type="submit"
                        variant="success"
                    >
                    Login
                    </Button>

                    <div className='log-google'>
                        <i 
                        className="fa-brands fa-google" 
                        style={{
                            paddingRight : '2.5rem'
                        }}>
                        </i>
                        Login with Google
                    </div>    
                </form>
            </div>
        </>
    )
}

export default Login;

                        
