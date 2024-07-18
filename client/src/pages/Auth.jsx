import { useState } from 'react';
import { TextField, Button} from '@mui/material';
import '../styles.css'
import './signUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../resources/images/logo.png'

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';




const Auth = () => {
  const appVerifier = window.recaptchaVerifier;
  const [displayOtpField, setDisplayOtpField] = useState(false);
  const [otp, setOtp] = useState('');


  let [formData , setFormData] = useState({
    name : '',
    phone : '',
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
    const {name , phone , password} = formData;

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        setDisplayOtpField(true);
        signInWithPhoneNumber(auth, phone, appVerifier)

        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;

          confirmationResult.confirm(otp).then((result) => {

            const user = result.user;

            axios.post('http://localhost:5000/api/patientSignup' , {name , phone ,password})
            .then((res) => console.log(res.data))
            .catch(e => console.log(e))
            
            console.log(formData);
          })
          .catch((error) => {
            console.log('Invalid code');
          });
        }).catch((error) => {
            console.log('Error sending code');
        });
      }
    });
    
  };

  
  const auth = getAuth();
  auth.languageCode = 'it';

  



  return (
      <>
      <div className='bg-[url("./resources/images/auth-bg.avif")] bg-cover w-screen h-screen'>
      <img src={Logo} id='logo'/>
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
            required
            variant="outlined"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          
          <TextField
            className='input-fields'
            variant="outlined"
            name="password"
            label="Set Password"
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
          <TextField 
            className='input-fields'
            variant="outlined"
            label="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{display: displayOtpField ? 'block' : 'none'}}
          />
          <Link to='/signUpDoctor' ><p style={{color : 'red' , textAlign : 'center' , marginTop : '10px'}}>Sign Up as Doctor</p></Link>
          <Link to='/login'><p style={{textAlign : 'center' , marginTop : '10px'}}>Already have an account ? Login</p></Link>
      
        
      
        <div className='log-google'>
          <i 
          className="fa-brands fa-google" style={{position: 'relative', top: '6px', left: '10px'}}></i>
          Sign up with Google
        </div>
      
      </form>

      </div>
      </div>
    </>
  )
}

export default Auth;
