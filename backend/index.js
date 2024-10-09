const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 3000;

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/appdb')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const users = [];

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).json({ message: 'User created', hashedPassword });
    } catch {
        res.status(500).send()
    };
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)

    if (user == null) {
        return res.status(400).send('Authentication failed')
    };
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Authentication failed')
        }
    } catch {
        return res.status(500).send()
    }
})

app.get('/users', (req, res) => {
    res.status(200).send({
        name: 'Connor',
        age: 35
    })
});

const userSchema = new mongoose.Schema({
    username: String,
    rank: String,
    avatar: {
        skin_color: String,
        clothing: String
    },
    inventory: [String]
});

const User = mongoose.model('User', userSchema);

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
}) //test request

app.listen(PORT, () => {
    console.log("The app is running on port whatevah")
})