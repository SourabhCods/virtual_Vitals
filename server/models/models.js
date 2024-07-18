import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})

const doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    // extraInfo: {type: Array, required: true}
})

const Patient = mongoose.model('Patient', patientSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);

export {Patient , Doctor}