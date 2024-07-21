import { TextField, Button } from "@mui/material";
import { useState ,  } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './signUp.css';
import Logo from '../resources/images/logo.png'
import { app } from '../firebase/firebaseSetup.js';


const Login = () => {
    const navigate = useNavigate();

    let [formData, setFormData] = useState({
        email: '',
        password: ''
    });

  let [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const url = userType === 'patient'
      ? 'http://localhost:5000/api/login'
      : 'http://localhost:5000/docRoute/login';
    axios.post(url, { email, password })
      .then((res) => {console.log(res.data);
        userType === "patient" ?  navigate('/dashboard')  : navigate('/doctorDashboard')
  })
      .catch(e => console.log(e));
      
    console.log(formData);
  };

  return (
    <>
    <div className='bg-[url("./resources/images/auth-bg.avif")] bg-cover'>
    <img src={Logo} id="logo" />
      <div className="signUp-form">
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>Login</p>
        <form onSubmit={onFormSubmit}>
          <div className="user-type-selector">
            Login as :   
            <label>
              <input
                type="radio"
                value="patient"
                checked={userType === 'patient'}
                onChange={handleUserTypeChange}
              />
              &nbsp;
              Patient
            </label>
            <label>
              <input
                type="radio"
                value="doctor"
                checked={userType === 'doctor'}
                onChange={handleUserTypeChange}
              />
              &nbsp;
              Doctor
            </label>
          </div>

          <TextField
            className="input-fields"
            variant="outlined"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />

          <TextField
            className="input-fields"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleOnChange}
          />

          <Button
            className='input-fields'
            type="submit"
            variant="contained"
          >
            Login
          </Button>

          <div className='log-google'>
            <i
              className="fa-brands fa-google"
              style={{position: 'relative', top: '6px', left: '10px'}}
              >
            </i>
            Login with Google
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
