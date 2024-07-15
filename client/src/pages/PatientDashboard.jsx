import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavBar } from './LandingPage';
import '../styles.css'
import Icon from 'react-icons-kit'
import {user} from 'react-icons-kit/fa/user';
import {spinner} from 'react-icons-kit/fa/spinner';
import {androidAlarmClock} from 'react-icons-kit/ionicons/androidAlarmClock';
import {userMd} from 'react-icons-kit/fa/userMd';
import {bell} from 'react-icons-kit/fa/bell';
import {signOut} from 'react-icons-kit/fa/signOut';


const PatientDashboard = () => {
  return (
    <>
    <NavBar />
    <div className='bg-blue-200 w-screen h-screen' >

      <div id='dashboard-section'>

        <div id="personal-info">
          <div className='rounded-full bg-white w-20 h-20 m-auto relative bottom-3'></div>
          <h1 className='text-white font-bold text-2xl relative bottom-7'>UserName</h1>
        </div>

        <div id="menu">
          <ol className='list-none flex flex-col gap-5'>
            <li><Icon icon={user} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Dashboard</li>
            <li><Icon icon={androidAlarmClock} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Appointments</li>
            <li><Icon icon={userMd} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Prescriptions</li>
            <li><Icon icon={bell} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Notifications</li>
            <li style={{color: 'red'}}><Icon icon={signOut} size={29} style={{color: 'red', position: 'relative', bottom: '3px'}} />Log Out</li>
          </ol>
        </div>
        
        <div id="appointments">
          <div style={{width: '105.4%',height: '19%',position: 'relative', right: '11px', bottom: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingTop: '5px'}}><h1 className='font-bold text-2xl'>Appointments</h1></div>
        
        </div>

        <div id="prescriptions">
          <div style={{width: '105.4%',height: '19%',position: 'relative', right: '11px', bottom: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingTop: '5px'}}><h1 className='font-bold text-2xl'>Prescriptions</h1></div>
  
        </div>

        <div id="medications">
          <div style={{width: '102.5%',height: '35%',position: 'relative', right: '11px', bottom: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingTop: '5px'}}><h1 className='font-bold text-2xl'>Current Medications</h1></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PatientDashboard;
