import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar';
import { BeatLoader } from 'react-spinners';
import '../styles.css';
import {motion} from 'framer-motion';
import {androidAlarmClock} from 'react-icons-kit/ionicons/androidAlarmClock';
import Icon from 'react-icons-kit';
import Logo from '../resources/images/logo.png'


const Appointments = () => {
  const navigate = useNavigate();
  const appointments = [];
  const location = useLocation();
  const userName = decodeURIComponent(location.search.split('=')[1]);
  const [loading, setLoading] = useState(true);
  const [formDisplay, setFormDisplay] = useState('none');
  const [blur, setBlur] = useState('')
  useEffect(() => {
    async function fetchData() {
    await fetch(`http://localhost:5000/api/appointments/${userName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then((response)=>{
        appointments.push(response.data);
        setLoading(false);
      })
      .catch((e)=>{
        console.log(e);
      })
  }
  fetchData();
}, [])


  const bookAppointment = async () => {
    setBlur('blur-md');
    setFormDisplay('block');
  }


  const displayDoctors = (e) => {
    e.preventDefault();
    navigate(`/list-of-doctors/?$`)
  }
  return (
    <div className='w-screen h-screen'>
      {loading ? <div className='loader'><BeatLoader loading={loading} size={20} id='spinner' color= 'rgb(0, 106, 255)' /></div> : (
    <div className={`bg-[url("./resources/images/auth-bg.avif")] bg-cover w-screen h-screen ${blur}`}>
      <motion.div
      initial={{opacity: 0, x: '-100vw'}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.3, delay: 0.5, tween: 'easeInOut'}}
      exit={{opacity: 0, x: '+100vw'}}          
      >
      <img src={Logo} id='logo' />  
      <NavBar userName={userName} />
      <div id="my-appointments">
        <h1 style={{color: 'rgb(0, 106, 255)', display: 'flex', gap: '10px', fontSize: '25px', fontWeight: 700, marginLeft: '15px', marginTop: '12px', width: 'fit-content'}}><Icon style={{position: 'relative', bottom: '2px'}} size={28} icon={androidAlarmClock} />My Appointments</h1>
        {appointments.length === 0 ? (<button onClick={bookAppointment} id='book-appointment'>Book An Appointment</button> ) : null}
        
        <div id='appointments-list'>
          {appointments.length !== 0 ? appointments.map((appointment, index) => (
            <div key={index} className='flex gap-40 relative top-32 left-10 bg-slate-400 w-10 h-10'>
              <li>{index + 1}</li>
              <li>{appointment.doctor}</li>
              <li>{appointment.regarding}</li>
              <li>{appointment.date}</li>
              <li>{appointment.time}</li>
              <li>{appointment.duration}</li>
              <li>{appointment.status}</li>
            </div>
          )) : null}
          {appointments.length === 0 ? <h1 style={{color: 'black', zIndex: -1, fontSize: '20px', fontWeight: 500, position: 'relative', top: '10rem', textAlign: 'center'}}>No appointments yet!</h1> : (<ol className='flex gap-40 relative top-28 left-10'>
          <li>S No.</li>
          <li >Doctor</li>
          <li >Regarding</li>
          <li >Date</li>
          <li >Time</li>
          <li >Duration</li>
          <li >Status</li>
        </ol>)}
        </div>
      </div>
      </motion.div>
    </div>
      )}
      <div className='blur-0' style={{
          display: `${formDisplay}`,
          width: '20rem',
          height: '17rem',
          backgroundColor: 'white',
          border: '3px solid rgb(0, 106, 255)',
          padding: '20px',
          borderRadius: '8px',
          margin: 'auto',
          zIndex: 9999,
          position: 'relative',
          bottom: '30rem'
        }}>
          <form onSubmit={displayDoctors} className='flex flex-col gap-10 font-semibold'>
            <div className='flex gap-4'><label>Regarding: </label><input className='border-2 border-black rounded-lg w-48 px-2' type='text'/></div>
            <div className='flex gap-14'><label>Date: </label><input className='border-2 border-black rounded-lg w-72' type='date'/></div>
            <div className='flex gap-14'><label>Time: </label><input className='border-2 border-black rounded-lg w-72' type='time'/></div>
            <button type='submit' id='search-doctors'>Search for doctors</button>
          </form>
      </div>
    </div>
  )
}

export default Appointments;
