const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// middleware to protect routes
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.user = await User.findById(userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token verification failed" });
  }
};


//middleware to check if the user is admin
const admin=(req,res,next) =>{
  if(req.user && req.user.role === "admin"){
    next();
  }else{
    res.status(403).json({message:"Not Authorized as an admin"});
  }
}

module.exports = { protect,admin };
