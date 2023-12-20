const AllModels = require("../utils/allModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try{
        const {firstName, lastName, mobileNumber, emailId, password, role} = req.body;
        const hashPassword = await bcrypt.hash(password, 12);
        let user;
        if(role==="factoryManager"){
            user = await AllModels.FactoryManager_Model.create({
                firstName,
                lastName,
                mobileNumber,
                emailId,
                password: hashPassword,
            });
        }
        res.status(201).json({message: "User created successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

exports.login = async (req, res) => {
    try{
        const {emailId, password, role} = req.body;
        if(!emailId || !password){
            return res.status(400).json({error: "Please fill all the fields"});
        }
        let user;
        if(role==="factoryManager"){
            user = await AllModels.FactoryManager_Model.findOne({
                where: {
                    emailId,
                }
            });
        }
        if(!user){
            return res.status(404).json({error: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(404).json({error: "Incorrect Password"});
        }
        const accessToken = jwt.sign({userId: user.id, role: role, emailId: user.emailId}, process.env.JWT_SECRET, {expiresIn: "30d"});

        const refreshToken = jwt.sign({userId: user.id, role: role, emailId: user.emailId}, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"});

        res.cookie("RTjwt", refreshToken, {
            httpOnly: true,
            maxAge: 30*24*60*60*1000, //30 days
        });

        res.cookie("ATjwt", accessToken, {
            httpOnly: true,
            maxAge: 30*24*60*60*1000, //30 days
        });

        res.status(200).json({
            message: "Login Successful",
            role,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                mobileNumber: user.mobileNumber,
                emailId: user.emailId,
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}