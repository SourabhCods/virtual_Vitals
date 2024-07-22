import express from 'express';
import {patientLogin, patientSignUp} from '../controllers/patientAuthControl.js';
import { Patient } from '../models/models.js';
const router = express.Router();

router.post('/patientSignup', patientSignUp);

router.post('/login', patientLogin);

router.get('/patientDashboard/:username', async (req, res) => {
    const {username} = req.params;
    try {
        const patientModel = await Patient.findOne({name: username});
        if (!patientModel) {
            return res.status(404).json({message: 'Patient not found'});
        }
        res.status(200).json({patientName: patientModel.name, patientEmail: patientModel.email});
    } catch (error) {
        console.log(error);
    }
});

export default router;