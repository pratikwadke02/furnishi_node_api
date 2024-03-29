const db = require('../../models');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = require('../../middleware/register.js');
const login = require('../../middleware/login.js');

const SALT = 10;

exports.register = async (req, res) => {
    try{
    const { error } = register.registerValidate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const isUser = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (isUser) {
        return res.status(400).send('User already registered!');
    }
    const salt = await bcrypt.genSalt(SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
        ...req.body,
        password: hashedPassword,
    });
    const data = {
        id: user.id
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
    res.status(200).send({
        message: "User registered successfully",
        data : user,
        authToken: authToken
    });
}catch(err){
    res.status(500).send(err);
}
    
}

exports.login = async (req, res) => {
    try{
        const {error} = login.loginValidate(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(!user){
            return res.status(400).send('Invalid email or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).send('Invalid email or password.');
        }
        const data = {
            id: user.id
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.status(201).send({
            message: "User LogedIn successfully",
            data : user,
            authToken: authToken
        });
    }catch(error){
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    try{
        const users = await User.findAll();
        res.send(users);
    }catch(error){
        res.status(500).send(error);
    }
}
