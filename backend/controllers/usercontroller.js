const User = require('../models/user');
const logger = require("../logger/logging.js")
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            logger.info('Email is already registered');
            return res.status(400).json({ error: 'Email is already registered' });
        }
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        logger.error('Error creating user:'+ error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email, password });
  
        if (user){
            logger.info('Login successful');
            res.status(200).json({ message: 'Login successful', userId: user._id });
        }else{
            logger.info('Login failed');
            res.status(401).json({ message: 'Login failed' });
        }
    }catch(error){
        logger.error('Error during login:'+ error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { createUser, loginUser };
