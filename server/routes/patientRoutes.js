import express from 'express';
import {patientLogin, patientSignUp, patientGoogleSignUp} from '../controllers/patientAuthControl.js';


const router = express.Router();

router.post('/patientSignup', patientSignUp);

router.post('/login', patientLogin);

router.post('/patientsignup/google', patientGoogleSignUp);

export default router;