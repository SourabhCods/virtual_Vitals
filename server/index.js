import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/patientRoutes.js'
import Router from './routes/doctorRoutes.js'

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true, 
        allowedHeaders: ['Content-Type'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },

));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




main().
then(() => console.log("Database successfully connected "))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/virtualVitals');
}

app.use('/api' , router);
app.use('/docRoute' , Router);
app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

