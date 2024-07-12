import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles.css';
import Doctors from '../resources/images/doctors.png';

const LandingPage = () => {
  return (
    <div>
      <div id='header'>
        <img src={Doctors} id='doctors-img' />
      </div>
    </div>
  )
}

export default LandingPage
