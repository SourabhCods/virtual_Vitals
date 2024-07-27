import express from 'express';
import {doctorLogin, doctorSignUp, searchDoctors} from '../controllers/doctorAuthControl.js'
import bcrypt from 'bcrypt';
import  { Doctor } from '../models/models.js'
import {doctorLogin, doctorSignUp} from '../controllers/doctor/doctorAuthControl.js'


const Router = express.Router();

Router.post('/doctorSignup', doctorSignUp)

Router.post('/login', doctorLogin);

Router.get('/searchDoctors' , searchDoctors);

export default Router;