import { useState } from 'react';
import { TextField, Button} from '@mui/material';
import './signUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavBar } from './LandingPage';

const Auth = () => {
  
  let [formData , setFormData] = useState({
    name : '',
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
    const {name , emailOrPhone , password} = formData;
    axios.post('http://localhost:5000/api/signup' , {name , emailOrPhone ,password})
    .then((res) => console.log(res.data))
    .catch(e => console.log(e))
  };

  
  return (
      <>
      <NavBar/>
      <div className='signUp-form'>
          <p style={{fontSize : '2rem ' , textAlign : 'center'}}>Sign Up</p>
          <form onSubmit={handleSubmit}>
          <TextField
            className='input-fields'
            variant="outlined"
            label="Patient Name"
            name="name"
            value={formData.patient_name}
            onChange={handleChange}
          />

          
          <TextField
            className='input-fields'
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
          <Button 
            className='input-fields'
            type="submit"
            variant="contained"
          >
          Register
          </Button>

          <Link to='/signUpDoctor' ><p style={{color : 'red' , textAlign : 'center' , marginTop : '10px'}}>Sign Up as Doctor</p></Link>
          <Link to='/login'><p style={{textAlign : 'center' , marginTop : '10px'}}>Already have an account ? Login</p></Link>
      
        
      
        <div className='log-google'>
          <i 
          className="fa-brands fa-google" 
          style={{
            paddingRight : '2.5rem'
          }}></i>
          SignUp with Google
        </div>
      
      </form>

      </div>
    </>
  )
}

export default Auth;
