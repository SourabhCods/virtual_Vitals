import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UserHomePage from './pages/UserHomePage.jsx';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  return (
    <div>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<UserHomePage />} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
