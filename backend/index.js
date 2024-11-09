require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }), express.json())

mongoose.connect('mongodb://127.0.0.1:27017/appdb')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
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

app.post('/register', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
            inventory: [],
            rank: 'Entry-level Employee',
            xp: 0
        });
        await user.save();
        const { password, ...userData } = user.toObject();
        res.status(201).json({ message: 'User created', user: userData });
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
        const user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(400).send('Authentication failed');

        const match = await bcrypt.compare(req.body.password, user.password);

        if (match) {
            const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

            res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
            const { password, ...userData } = user.toObject();
            res.json({
                accessToken,
                user: userData
            });
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

        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
});

app.post('/update-xp', async (req, res) => {
    const { userId, xp } = req.body;
    try {
        await User.findByIdAndUpdate(userId, { xp });
        res.status(200).json({ message: 'XP updated successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update XP' });
    }
});

app.delete('/delete-account', async (req, res) => {
    const { userId } = req.body;
    try {
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'Account deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete account' });
    }
});

app.listen(PORT, () => {
    console.log("The app is running on port: ", PORT)
})