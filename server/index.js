import express from 'express';
import cors from 'cors';

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


app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

