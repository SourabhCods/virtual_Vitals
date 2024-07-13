import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavBar } from './LandingPage';
import '../styles.css'

const PatientDashboard = () => {
  return (
    <>
    <NavBar />
    <div id='dashboard-section'>
      <div id="personal-info">

      </div>
    </div>
    </>
  )
}

export default PatientDashboard;
