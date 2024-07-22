import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar';
import { BeatLoader } from 'react-spinners';
import '../styles.css';
import {motion} from 'framer-motion';

const Appointments = () => {
  const location = useLocation();
  const userName = decodeURIComponent(location.search.split('=')[1]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
    await fetch(`http://localhost:5000/api/appointments/${userName}`, {
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
}, [])
  return (
    <div>
      <motion.div
      initial={{opacity: 0, x: '-100vw'}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.3, delay: 0.5, tween: 'easeInOut'}}
      exit={{opacity: 0, x: '+100vw'}}          
      >
      {loading ? <div className='loader'><BeatLoader loading={loading} size={20} id='spinner' color= 'rgb(0, 106, 255)' /></div> : (
    <div className='bg-[url("./resources/images/auth-bg.avif")] bg-cover w-screen h-screen'>
      <NavBar userName={userName} />
      <div id="appointments">
        <h1 style={{color: 'rgb(0, 106, 255)', fontSize: '25px', fontWeight: 700, marginLeft: '10px'}}>Appointments</h1>

      </div>
    </div>
      )}
      </motion.div>
    </div>
  )
}

export default Appointments;
