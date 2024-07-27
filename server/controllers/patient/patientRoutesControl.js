import { Patient, Appointments } from "../../models/models.js";

export const getData = async (req, res) => {
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
}

export const getAppointments = async (req, res) => {
    const {userName} = req.params;
    try {
        const findAppointments = await Appointments.findOne({patient: userName});
        if (!findAppointments) {
            return res.status(404).json({message: 'No appointments found!'})
        }
        res.status(200).json({appointments: findAppointments[0]})
    } catch (error) {
        console.log(error);
    }
}