const jwt = require("jsonwebtoken");

exports.tokenVerify = async (req, res, next) => {
	const token = req.cookies.ATjwt;
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

				// res.clearCookie("AAjwt");

				if (req.cookies?.RTjwt) {
					const refreshToken = req.cookies.RTjwt;
					jwt.verify(
						refreshToken,
						process.env.JWT_REFRESH_SECRET,
						(error, decoded) => {
							if (error) {
								res.clearCookie("RTjwt");
								return res
									.status(401)
									.json({
										message: "Invalid refresh token",
										error: error.message,
									});
							}
							accessToken = jwt.sign(
								{ userId: decoded.userId, role:decoded.role, emailId: decoded.emailId },
								process.env.JWT_SECRET,
								{ expiresIn: "120s" }
							);
							req.user = decoded;
							res.cookie("ATjwt", accessToken, {
								httpOnly: true,
								maxAge: 30 * 24 * 60 * 60 * 1000,
							});
							next();
						}
					);
				} else {
					return res.status(401).json({ message: "Invalid refresh token" });
				}
			} else {
				req.user = decoded;
				next();
			}
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

