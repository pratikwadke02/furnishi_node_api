exports.verifyRole = async (req, res, next) => {
	try{
        const user = req.user;
        if(user.role === "factoryManager"){
            next();
        }
        else{
            return res.status(401).json({ message: "Access denied" });
        }
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

