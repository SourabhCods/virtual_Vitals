import { Patient } from "../models/models.js";
import bcrypt from 'bcrypt';



export const patientSignUp = async (req, res) => {
    const {name, phone, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const patientModel = await Patient.create({name, phone, hashedPassword});
        res.status(201).json({message: 'Patient created successfully', patientName: patientModel.name});
    } catch (error) {
        console.log(error);
    }
}

export const patientLogin = async (req, res) => {
    const {phone, password} = req.body;
    try {
        const patientModel = await Patient.findOne({phone});
        if (patientModel && (await bcrypt.compare(password, patientModel.hashedPassword))) {
        res.status(200).json({message: 'Patient logged in successfully'});
        } else {
        res.status(401).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.log(error);
    }
}