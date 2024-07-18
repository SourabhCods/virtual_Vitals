import mongoose from 'mongoose';
import Patient from '../models/models.js';
import fakePatients from './data.js';

let initDB = async () =>{
    await Patient.deleteMany({}); //Removing(Clean up) all the pre-existing Data before inserting new data into Database
    await Patient.insertMany(fakePatients);
    console.log("Database is initialized");

} 

initDB();
