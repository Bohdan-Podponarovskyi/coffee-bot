require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
    });

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .then(err => res.json(err))
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});