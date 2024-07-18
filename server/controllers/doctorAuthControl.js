import {Doctor} from '../models/models.js';
import bcrypt from 'bcrypt';

export const doctorSignUp = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctorModel = await Doctor.create({name, email, hashedPassword});
        console.log("New Doctor Created Sucessfully")
        res.status(201).json({message: 'Doctor created successfully', doctorName: doctorModel.name});
    } catch (error) {
        console.log(error);
    }
}

export const doctorLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const doctorModel = await Doctor.findOne({email});
        if (doctorModel && (await bcrypt.compare(password, doctorModel.hashedPassword))) {
            res.status(200).json({message: 'Doctor logged in successfully'});
        } else {
            res.status(401).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.log(error);
    }
}