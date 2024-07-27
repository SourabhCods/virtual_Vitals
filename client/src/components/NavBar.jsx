import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



const NavBar = ({userName}) => {
    const location = useLocation();
    const currentPage = location.pathname;
    console.log(currentPage);
    const [activeLink, setActiveLink] = useState('');
    useEffect(()=>{
      setActiveLink(currentPage);
    }, [currentPage]);
  
    const navigate = useNavigate();
  
    function handleClick (link, userName) {
        setActiveLink(link);
        navigate(`${link}?username=${encodeURIComponent(userName)}`)
    }
    return(
      <div id='nav-bar'>
            <ol>
              <li className={activeLink === '/' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('/', userName)} >Home</li>
              <li className={activeLink === '/dashboard' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('/dashboard', userName)} >Dashboard</li>
              <li className={activeLink === '/appointments' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('/appointments', userName)}>Appointments</li>
              <li className={activeLink === '/prescriptions' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('/prescriptions', userName)}>Prescriptions</li>
              <li className={activeLink === '/support' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('/support', userName)}>Support</li>     
            </ol>
          </div>
    )
  }
  

export default NavBar;
