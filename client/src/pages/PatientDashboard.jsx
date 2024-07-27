import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css'
import Icon from 'react-icons-kit'
import {user} from 'react-icons-kit/fa/user';
import {androidAlarmClock} from 'react-icons-kit/ionicons/androidAlarmClock';
import {userMd} from 'react-icons-kit/fa/userMd';
import {bell} from 'react-icons-kit/fa/bell';
import {signOut} from 'react-icons-kit/fa/signOut';
import {gear} from 'react-icons-kit/fa/gear'
import {BeatLoader} from 'react-spinners';
import NavBar from '../components/NavBar.jsx';
import {motion} from 'framer-motion';
import Logo from '../resources/images/logo.png'


const PatientDashboard = () => {
  const location = useLocation();
  const userName = decodeURIComponent(location.search.split('=')[1]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
    await fetch(`http://localhost:5000/api/patientDashboard/${userName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(()=>{
        setLoading(false);
      })
      .catch((e)=>{
        console.log(e);
      })
    }
    fetchData();
  }, []);
  return (
    <div>
    {loading ? (
      <div>
        <BeatLoader color='rgb(0, 106, 255)' loading={loading} size={18} id='spinner' />
      </div>
    ) : (
      <>
      
      <motion.div
      initial={{opacity: 0, x: '-100vw'}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.3, delay: 0.5, tween: 'easeInOut'}}
      exit={{opacity: 0, x: '-100vw'}}
      >
    <img src={Logo} id='logo' />
    <NavBar userName={userName} />
    <div className='bg-[url("./resources/images/auth-bg.avif")] bg-cover w-screen h-screen' >
      <button style={{backgroundColor: 'white', width: '180px', height: '40px', textAlign: 'center', position: 'relative', color: 'black', left: '85%', top: '5%', display: 'flex', gap: '15px', padding: '7px', borderRadius: '8px', fontWeight: 500}}><Icon icon={gear} size={25} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '1px'}} />Edit your Profile</button>
      <div id='dashboard-section'>

        <div id="personal-info">
          <div className='rounded-full bg-white w-20 h-20 m-auto relative bottom-3'></div>
          <h1 className='text-white font-bold text-2xl relative bottom-7'>{userName}</h1>
        </div>

        <div id="menu">
          <ol className='list-none flex flex-col gap-5'>
            <li><Icon icon={user} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Dashboard</li>
            <li onClick={()=> navigate(`/appointments?userName=${encodeURIComponent(userName)}`)}><Icon icon={androidAlarmClock} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Appointments</li>
            <li><Icon icon={userMd} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Prescriptions</li>
            <li><Icon icon={bell} size={29} style={{color: 'rgb(0, 106, 255)', position: 'relative', bottom: '3px'}} />Notifications</li>
            <li style={{color: 'red'}}><Icon icon={signOut} size={29} style={{color: 'red', position: 'relative', bottom: '3px'}} />Log Out</li>
          </ol>
        </div>
        
        <div id="upcoming-appointments">
          <div style={{width: '102.45%',height: '33%',position: 'relative', right: '11px', bottom: '10px', overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingBottom: '7px'}}><h1 className='font-bold text-xl'>Upcoming Appointments</h1></div>
        
        </div>

        <div id="prescriptions">
          <div style={{width: '102.45%',height: '33%',position: 'relative', right: '11px', bottom: '10px', overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingBottom: '7px'}}><h1 className='font-bold text-xl'>Prescriptions</h1></div>
        </div>

        <div id="medications">
          <div style={{width: '102.5%',height: '33%',position: 'relative', right: '11px', bottom: '10px', overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'rgb(0, 106, 255)', color: 'white', paddingLeft: '14px', paddingBottom: '7px'}}><h1 className='font-bold text-xl'>Doctors</h1></div>
        </div>
      </div>
    </div>
      </motion.div>
    </>
    )}
    
    </div>
  )
}
export default PatientDashboard;
