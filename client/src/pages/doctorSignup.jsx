import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';
import '../styles.css'
import Logo from '../resources/images/logo.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebaseSetup.js';


const DoctorSignup = () => {

  const navigate = useNavigate();

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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name , email , password} = formData;
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    axios.post('http://localhost:5000/docRoute/doctorSignup' , {name , email ,password})
    .then((res) => console.log('Doctor created successfully'))
    .catch(e => console.log(e))
<<<<<<< HEAD
    navigate('/doctorDashboard' , {state : name})
    console.log('Form Data:', formData)
=======
>>>>>>> 6c430bf48453673350a095717ffff26dcdc38b1c
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }
    return(
        <div className='bg-[url("./resources/images/auth-bg.avif")] bg-cover w-screen h-screen'>
        <img src={Logo} id='logo'/>
        <div className='signUp-form'>
                <p style={{fontSize : '2rem ' , textAlign : 'center'}}>Sign Up</p>
              <form onSubmit={handleSubmit}>
                <TextField
                variant="outlined"
                className='input-fields'
                label="Doctor Name"
                name="name"
                value={formData.doctor_name}
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
                
                <br></br>
                <Button className='input-fields'
                type="submit"
                variant="contained"
                >
                Register
                </Button>
            

                <Link to='/auth' ><p style={{color : 'red' , textAlign : 'center' , marginTop : '10px'}}>Sign Up as Patient</p></Link>
                <Link to='/login'><p style={{textAlign : 'center' , marginTop : '10px'}}>Already have an account ? Login</p></Link>
      
            </form>  
          </div>
          </div>  
    )
}

export default DoctorSignup;
  