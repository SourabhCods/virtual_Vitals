import express from 'express';
import bcrypt from 'bcrypt';
import  { Patient } from '../models/models.js'
import {patientLogin, patientSignUp} from '../controllers/patientAuthControl.js';


const router = express.Router();

router.post('/patientSignup', patientSignUp);

router.post('/login', patientLogin);



export default router;