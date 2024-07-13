import { useState } from 'react';
import { TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import './signUp.css';

const DoctorSignup = () => {
    let [formData , setFormData] = useState({
    doctor_name : '',
    emailOrPhone : '',
    password : ''

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };
    return(
        
        <div className='signUp-form'>
                <p style={{fontSize : '2rem ' , textAlign : 'center'}}>Sign Up</p>
                <TextField
                variant="outlined"
                className='input-fields'
                label="Doctor Name"
                name="doctor_name"
                value={formData.doctor_name}
                onChange={handleChange}
                />
                
            
                <TextField
                className='input-fields'
                required
                variant="outlined"
                label="Email or Phone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                />

            
                <TextField
                className='input-fields'
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                />
                
                <br></br>
                <Button className='input-fields'
                type="submit"
                variant="contained"
                >
                Register
                </Button>
            

                <Link to='/auth' ><p style={{color : 'red' , textAlign : 'center' , marginTop : '10px'}}>Sign Up as Patient</p></Link>
                <Link to='/login'><p style={{textAlign : 'center' , marginTop : '10px'}}>Already have an account ? Login</p></Link>
      
        
      
                <div className='log-google'>
                <i 
                className="fa-brands fa-google" 
                style={{
                  paddingRight : '2.5rem'
                }}></i>
                SignUp with Google
                </div>
              </div>  
    )
}

export default DoctorSignup;
  