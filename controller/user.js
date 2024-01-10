const AllModels = require("../utils/allModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SEND_Mail, Send_Mail } = require("../utils/SendMail");
const OTP_GEN = require("../utils/OtpGen");


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

        if(user){
            const setting = await AllModels.Setting_Model.create({
                userId: user.id,
            });
        }
        
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

exports.userEmailLogin = async (req, res, next) => {
    try{
        const {emailId, role, } = req.body;
        let storedOtp = await AllModels.Otp_Model.findOne({
            where: {
                emailId,
                role,
            }
        });
        const {otp, expiryDatetime} = OTP_GEN.OTP_GENERATE();
        if(!otp){
            return res.status(500).json({ errors: "Something went wrong. Please try again" });
        }
        if(storedOtp){
            storedOtp.otp = otp;
            storedOtp.expiryTime = expiryDatetime;
            await storedOtp.save();
        }
        else{
            await AllModels.Otp_Model.create({
                emailId,
                role,
                otp,
                expiryTime: expiryDatetime,
            });
        }
        const subject = "OTP for Login";
        const body = `Your OTP for login is ${otp}`;
        // const sendMail = await Send_Mail(emailId, null, subject, body);
        // if(!sendMail){
        //     return res.status(500).json({ errors: "Something went wrong. Please try again" });
        // }
        res.status(200).json({message: "OTP sent successfully", otp: otp});
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

exports.verifyOtp = async (req, res, next) => {
    try{
        const{emailId, role, otp} = req.body;
        let whereClause = {};
        if(emailId){
            whereClause.emailId = emailId;
        }else{
            return res.status(400).json({error: "EmailId is required"});
        }
        if(role){
            whereClause.role = role;
        }else{
            return res.status(400).json({error: "Role is required"});
        }
        let storedOtp = await AllModels.Otp_Model.findOne({
            where: whereClause
        });
        if(!storedOtp){
            return res.status(404).json({error: "OTP not found"});
        }
        if(storedOtp.otp != otp){
            return res.status(404).json({error: "OTP not matched"});
        }
        if(storedOtp.expiryTime < Date.now()){
            return res.status(404).json({error: "OTP expired"});
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

        return res.status(200).json({
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

exports.assistantUserEmailLogin = async (req, res, next) => {
    try{
        const {emailId, role, } = req.body;
        if(role != "assistantUser"){
            return res.status(400).json({error: "Assistant User role is required"});
        }
        let storedOtp = await AllModels.Otp_Model.findOne({
            where: {
                emailId,
                role,
            }
        });
        const {otp, expiryDatetime} = OTP_GEN.OTP_GENERATE();
        if(!otp){
            return res.status(500).json({ errors: "Something went wrong. Please try again" });
        }
        if(storedOtp){
            storedOtp.otp = otp;
            storedOtp.expiryTime = expiryDatetime;
            await storedOtp.save();
        }
        else{
            await AllModels.Otp_Model.create({
                emailId,
                role,
                otp,
                expiryTime: expiryDatetime,
            });
        }
        const subject = "OTP for Login";
        const body = `Your OTP for login is ${otp}`;
        // const sendMail = await Send_Mail(emailId, null, subject, body);
        // if(!sendMail){
        //     return res.status(500).json({ errors: "Something went wrong. Please try again" });
        // }
        res.status(200).json({message: "OTP sent successfully", otp: otp});
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

exports.assistantUserVerifyOtp = async (req, res, next) => {
    try{
        const {emailId, role, otp} = req.body;
        if(role != "assistantUser"){
            return res.status(400).json({error: "Assistant User role is required"});
        }
        let whereClause = {};
        if(emailId){
            whereClause.emailId = emailId;
        }
        if(role){
            whereClause.role = role;
        }
        let storedOtp = await AllModels.Otp_Model.findOne({
            where: whereClause
        });
        if(!storedOtp){
            return res.status(404).json({error: "OTP not found"});
        }
        if(storedOtp.otp != otp){
            return res.status(404).json({error: "OTP not matched"});
        }
        if(storedOtp.expiryTime < Date.now()){
            return res.status(404).json({error: "OTP expired"});
        }
        let assistantUser = await AllModels.AssistantUser_Model.findOne({
            where: {
                emailId,
            }
        });
        if(!assistantUser){
            return res.status(404).json({error: "Assistant User not found"});
        }
        const accessToken = jwt.sign({userId: assistantUser.id, role: role, emailId: assistantUser.emailId}, process.env.JWT_SECRET, {expiresIn: "30d"});
        const refreshToken = jwt.sign({userId: assistantUser.id, role: role, emailId: assistantUser.emailId}, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"});
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
        return res.status(200).json({
            message: "Login Successful",
            user: {
                id: assistantUser.id,
                name: assistantUser.name,
                role: role,
                mobileNumber: assistantUser.mobileNumber,
                emailId: assistantUser.emailId,
            },
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}