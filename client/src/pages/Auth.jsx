import { useState } from 'react';
import { TextField, Button} from '@mui/material';
import '../styles.css'
import './signUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../resources/images/logo.png'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebaseSetup.js';



const Auth = () => {
  let [formData , setFormData] = useState({
    name : '',
    email : '',
    password : ''

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const auth = getAuth(app);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(async (response)=>{
        const credentials = GoogleAuthProvider.credentialFromResult(response);
        const user = response.user;
        const token = await user.getIdToken();
        const registration = await fetch('http://localhost:5000/api/patientsignup/google',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({token: token})
        } )
        .then((res) => console.log(res.data))
        .catch(e => console.log(e))
        
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      const emailFromGoogle = error.customData.email;
      const credentialsFromError = GoogleAuthProvider.credentialFromError(error);
      console.log(emailFromGoogle, credentialsFromError); 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name , email , password} = formData;
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      axios.post('http://localhost:5000/api/patientSignup' , {name: name , email: email ,password: password})
      .then((res) => console.log(res.data))
      .catch(e => console.log(e))
      console.log(formData);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    
  };

  
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
            value={formData.name}
            onChange={handleChange}
          />

          
          <TextField
            className='input-fields'
            required
            variant="outlined"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type='email'
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

          <Link to='/signUpDoctor' ><p style={{color : 'red' , textAlign : 'center' , marginTop : '10px'}}>Sign Up as Doctor</p></Link>
          <Link to='/login'><p style={{textAlign : 'center' , marginTop : '10px'}}>Already have an account ? Login</p></Link>
      
        
      
        <div className='log-google' onClick={googleSignIn}>
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
