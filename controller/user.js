const AllModels = require("../utils/allModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try{
        const {firstName, lastName, mobileNumber, emailId, password, role} = req.body;
        const hashPassword = await bcrypt.hash(password, 12);
        let user = await AllModels.User_Model.findOne({
            where: {
                mobileNumber,
                emailId,
                role,
            }
        });
        if(user){
            return res.status(400).json({error: "User already exists"});
        }
        user = await AllModels.User_Model.create({
            firstName,
            lastName,
            mobileNumber,
            emailId,
            password: hashPassword,
            role,
        });

        res.status(201).json({success:true, message: "User created successfully"});
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
        let user = await AllModels.User_Model.findOne({
            where: {
                emailId,
                role,
            }
        });
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
            sameSite: "none",
            secure: true,
        });

        res.cookie("ATjwt", accessToken, {
            httpOnly: true,
            maxAge: 30*24*60*60*1000, //30 days
            sameSite: "none",
            secure: true,
        });

        res.status(200).json({
            message: "Login Successful",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                mobileNumber: user.mobileNumber,
                emailId: user.emailId,
            },
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}