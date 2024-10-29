require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

const cors = require("cors");


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.listen(5050, () => {
    console.log(`Server Started at ${5050}`)
})

const routes = require('./routes/routes');
app.use('/api', routes)