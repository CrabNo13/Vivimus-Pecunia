require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/appdb')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    inventory: { type: Array, default: [] },
    rank: { type: String, default: 'Entry-level Employee' },
    xp: { type: Number, default: 0 }
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            inventory: [],
            rank: 'Entry-level Employee',
            xp: 0
        });
        await user.save();
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        if (error.code == 11000) {
            res.status(400).send('Email already taken')
        } else {
            res.status(500).send('Error creating user')
        };
    };
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });

        if (!user) return res.status(400).send('Authentication failed');

        const match = await bcrypt.compare(req.body.password, user.password);

        if (match) {
            const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            const refreshToken = jwt.sign({ name: user.name }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

            res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
            res.json({ accessToken });
        } else {
            return res.status(400).send('Authentication failed')
        };
    } catch (error) {
        return res.status(500).send('Error logging in')
    };
});

app.post('/token', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log("The app is running on port: ", PORT)
})