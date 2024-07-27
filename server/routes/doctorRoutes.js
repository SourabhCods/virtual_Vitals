import express from 'express';
import {doctorLogin, doctorSignUp, searchDoctors} from '../controllers/doctorAuthControl.js'


const Router = express.Router();

Router.post('/doctorSignup', doctorSignUp)

Router.post('/login', doctorLogin);

Router.get('/searchDoctors' , searchDoctors);

export default Router;