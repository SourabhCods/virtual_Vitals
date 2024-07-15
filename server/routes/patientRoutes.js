import express from 'express';
import bcrypt from 'bcrypt';
import Patient from '../models/models.js'

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {name, emailOrPhone, password} = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const patientModel = await Patient.create({name, emailOrPhone, hashedPassword});
    res.status(201).json({message: 'Patient created successfully'});
  } catch (error) {
      console.log(error);
  }
});

router.post('/login', async (req, res) => {
  const {emailOrPhone, password} = req.body;
  try {
    const patientModel = await Patient.findOne({emailOrPhone});
    if (patientModel && (await bcrypt.compare(password, patientModel.hashedPassword))) {
      res.status(200).json({message: 'Patient logged in successfully'});
    } else {
      res.status(401).json({message: 'Invalid email or password'});
    }
} catch (error) {
    console.log(error);
}})



export default router;