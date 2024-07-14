import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:3000',
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

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

