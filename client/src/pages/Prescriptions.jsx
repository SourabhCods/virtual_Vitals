import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar.jsx';
import '../styles.css';


const Prescriptions = () => {
  const location = useLocation();
  const userName = decodeURIComponent(location.search.split('=')[1])
  return (
    <div>
      <NavBar userName={userName} />
    </div>
  )
}

export default Prescriptions
