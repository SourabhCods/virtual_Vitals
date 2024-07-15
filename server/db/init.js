import mongoose from 'mongoose';
import Patient from '../models/models.js';
import fakePatients from './data.js';

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/virtualVitals')
}

main().then( ()=> { console.log("Connection with Database is successful") })
.catch((err) => console.log(err))

let initDB = async () =>{
    await Patient.deleteMany({}); //Removing(Clean up) all the pre-existing Data before inserting new data into Database
    await Patient.insertMany(fakePatients);
    console.log("Database is initialized");

} 

initDB();
