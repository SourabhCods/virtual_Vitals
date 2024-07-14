import React, {useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles.css';
import Logo from '../resources/images/logo.png'
import Doctors from '../resources/images/doctors.png';
import Dashboard from '../resources/images/dashboard.jpg';
import Video_call from '../resources/images/video-call.jpg';
import Prescription from '../resources/images/pres-slip.jpg'
import Transaction from '../resources/images/transaction.jpg';
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const DashboardIntro = () => {
  return (
    <>
      {/* Dashboard Intro */}
      <div id='dashboard-intro'>
        <img src={Dashboard} style={{width: '35%', height: '80%', borderRadius: '10px', position: 'relative', top: '10%', left: '3%'}}/>
        <h1>Navigate through your medical information and appointments with ease, with a User Friendly dashboard</h1>
        <p>Personalized Experience for both Patients and Doctors, ensuring a smooth and intuitive experience for all users.</p>
      </div>
    </>
  )
}

const VideoCall = () => {
  return (
    <>
      {/* Video Calls */}
      <div id='video-call-section'>
        <img src={Video_call} style={{width: '35%', height: '92%', borderRadius: '10px', position: 'relative', top: '5%', left: '63%'}}/>
        <h1>A Seamless Virtual Consultation Experience, ensuring Medical Care just a click away</h1>
        <p>Experience crystal-clear video calls and Secure Messaging with your doctor, providing effective communication and a personal touch, even when you're miles apart.</p>
      </div>
    </>
  )
}

const PrescriptionIntro = () => {
  return (
    <>
      {/* Prescription */}
      <div id='pres-box'>
      <img src={Prescription} style={{width: '35%', height: '80%', borderRadius: '10px', position: 'relative', top: '10%', left: '3%'}}/>
        <h1>Get your Prescriptions and Medical Reports Digitally</h1>
        <p>Securely receive and manage your prescriptions digitally, making it easier than ever to get the medication you need.</p>
      </div>
    </>
  )
}

const TransactionIntro = () => {
  return (
    <>
      {/* Transaction */}
      <div id="transaction-box">
        <img src={Transaction} style={{width: '35%', height: '96%', borderRadius: '10px', position: 'relative', top: '2%', left: '63%'}}/>
        <h1>Experience Effortless Billing with our User Friendly Payment System</h1>
        <p>Enjoy peace of mind with our robust and encrypted payment gateway that ensures your transactions are safe and secure.</p>
      </div>
    </>
  )
}

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  const handleClick  = (link)=>()=>{
    setActiveLink(link);
    if (link === 'support') {
      navigate(`/`);
    } else {
    navigate(`${link}`, {state: {}});
  }
  }
  return(
    <div id='nav-bar'>
          <ol>
            <li className={activeLink === '/' ? 'nav-link active' : 'nav-link'} onClick={handleClick('/')} >Home</li>
            <li className={activeLink === 'dashboard' ? 'nav-link active' : 'nav-link'} onClick={handleClick('/dashboard')} >Dashboard</li>
            <li className={activeLink === 'support' ? 'nav-link active' : 'nav-link'} onClick={handleClick('support')}>Support</li>
          </ol>
        </div>
  )
}


const MainComponent = ({sections}) => {
  
  return (
    <div>
      <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} >
      {/* Header */}
      <div id='header'>
        <img src={Logo} id='logo'/>
        <img src={Doctors} id='doctors-img' />
        <Link to={'/auth'}><button id='patient-button'>Sign Up as Patient</button></Link>
        {<NavBar />}
        <button id='doctor-button'>Sign Up as Doctor</button>
        <h1 id='intro-line'>Bridge the gap between patients and doctors</h1>
        <button id='get-started'>Get Your First Appointment</button>
      </div>
      </motion.div>

      {sections.map((SectionComponent, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true, 
          threshold: 0.3, 
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.25 }} // Delay based on index for staggered effect
          >
            <SectionComponent />
          </motion.div>
        );
      })}

      {/* Footer */}
      <div id="footer">
      <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@virtual-vitals.com</p>
            <p>Phone: +9810180955</p>
            <p>Address: C-185, Shahdara, New Delhi</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/guide'>Guide</Link></li>
              <li><Link to='/'>Support</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-media">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VirtualVitals. All rights reserved.</p>
        </div>
      </div>
    
  )
}
const LandingPage = () => {
  return (
    <>
    <MainComponent sections={[() => <DashboardIntro />,
      () => <VideoCall />,
      () => <PrescriptionIntro />,
      () => <TransactionIntro />]} />
    
    </>
  )
}

export default LandingPage;
export {MainComponent};

export {NavBar};
