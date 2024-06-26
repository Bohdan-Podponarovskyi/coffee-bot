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

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(400).json({error: err.message}));
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id: id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error: err.message}));
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        phone: req.body.phone,
        coffeeDate: req.body.coffeeDate
    })
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error: err.message}));
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error: err.message}));
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error: err.message}));
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});