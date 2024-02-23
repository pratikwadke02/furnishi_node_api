const jwt = require("jsonwebtoken");

exports.tokenVerify = async (req, res, next) => {
	let token;
	let refreshToken;
	if(req.headers.authorization || req.cookies?.ATjwt){
		token = req.headers.authorization?.split(" ")[1];
		if(!token) token = req.cookies?.ATjwt;
	}
	if (!token) {
		return res.status(401).json({ message: "Access denied" });
	}
	try {
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				if (error.name != "TokenExpiredError") {
					return res
						.status(401)
						.json({ message: "Invalid access token", error: error.message });
				}
				if (req.headers['refresh-token'] || req.cookies?.RTjwt) {
					refreshToken = req.headers['refresh-token'].split(" ")[1];
					if(!refreshToken) refreshToken = req.cookies?.RTjwt;
					jwt.verify(
						refreshToken,
						process.env.JWT_REFRESH_SECRET,
						(error, decoded) => {
							if (error) {
								return res
									.status(401)
									.json({ message: "Invalid refresh token", error: error.message });
							}
							req.user = decoded;
							next();
						}
					);
				}
			}
			req.user = decoded;
			next();
		}
		);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: error.message });
	}
}

