const express = require('express');
const User  = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const {protect} = require('../Middleware/AuthMiddleware');
const router = express.Router();

//@route post /api/user/register


router.post("/register",async (req,res)=>{
    const {name,email,password} = req.body;

    try{
       let user = await User.findOne({email});

       if(user) return res.status(400).json({message:"User Already Exists"});

       user = new User({name,email,password});
       await user.save();

       //create jwt payload
       const payload = { user: {id:user._id,role:user.role} };


       //sign and return the token along with user data
       jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"40h"},(err,token)=>{
       if(err) throw err;
         //send the user and token in response
        res.status(201).json({
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token,
       });
  })
    }catch(error){
      console.log(error);
      res.status(500).send("Server Error");
    }
});


//route Post /users/login
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;

    try{
        //find the user by email
        let user = await User.findOne({email});

    
        if(!user) return res.status(400).json({message:"invalid email Credentials"});
        const isMatch = await user.matchPassword(password);

        if(!isMatch)
            return res.status(400).json({message:"Invalid Credentials"});

        //create jwt payload
       const payload = { user: {id:user._id,role:user.role} };


       //sign and return the token along with user data
       jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"40h"},(err,token)=>{
       if(err) throw err;
         //send the user and token in response
        res.json({
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token,
       });
  });
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
});


//route get api/users/profile

router.get("/profile",protect,async(req,res)=>{
    res.json(req.user);
});

module.exports = router;