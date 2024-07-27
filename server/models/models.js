import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: Buffer, contentType: String, required: false},
})

const doctorSchema = new mongoose.Schema({
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: Buffer, contentType: String, required: false},
    council: {type: String, required: false},
    registrationNumber: {type: Number, required: false},
    specialization: {type: String, required: false},
    consultationCharges: {type: Number, required: false},
    preferredTimingSlot: {type: String, required: false},
    preferredDuration: {type: String, required: false},
})

const AppointmentSchema = new mongoose.Schema({
    patient: {type: String, required: true},
    doctor: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    regarding: {type: String, required: true},
    status: {type: String, required: true, enum: ['booked', 'declined', 'pending'], default: 'pending'}
})



const Patient = mongoose.model('Patient', patientSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);
const Appointments = mongoose.model('Appointments', AppointmentSchema);

export {Patient , Doctor, Appointments};

