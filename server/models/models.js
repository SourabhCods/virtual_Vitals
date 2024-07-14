import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://hrpofficial736:hrp5315q@mycluster.x70l0br.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.log(error));

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    emailOrPhone: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})

const doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    emailOrPhone: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})

const Patient = mongoose.model('Patient', patientSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);