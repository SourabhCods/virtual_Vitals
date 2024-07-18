import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/patientRoutes.js'
import Router from './routes/doctorRoutes.js';
import dotenv from 'dotenv';



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


dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

main().
then(() => console.log("Database successfully connected "))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_DB_URI);
}

app.use('/api' , router);
app.use('/docRoute' , Router);


app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

