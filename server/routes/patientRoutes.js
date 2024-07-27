import express from 'express';
import { patientLogin, patientSignUp } from '../controllers/patient/patientAuthControl.js';
import { getAppointments, getData } from '../controllers/patient/patientRoutesControl.js';

const router = express.Router();

router.post('/patientSignup', patientSignUp);

router.post('/login', patientLogin);

router.get('/patientDashboard/:username', getData);

router.get('/appointments/:username', getAppointments);




export default router;