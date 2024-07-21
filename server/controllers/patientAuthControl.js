import { Patient } from "../models/models.js";
import bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

export const patientSignUp = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const patientModel = await Patient.create({name: name, email: email, hashedPassword: hashedPassword});
        res.status(201).json({message: 'Patient created successfully', patientName: patientModel.name});
    } catch (error) {
        console.log(error);
    }
}

export const patientLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const patientModel = await Patient.findOne({email});
        if (patientModel && (await bcrypt.compare(password, patientModel.hashedPassword))) {
        res.status(200).json({message: 'Patient logged in successfully'});
        } else {
        res.status(401).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.log(error);
    }
}



export const patientGoogleSignUp = async (req, res) => {
    const {token} = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    console.log(client);
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    const {name, email} = ticket.getPayload();
    console.log(name, email);
}





