const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginRouter = express.Router()
const User = require('../models/User')

const SECRET= process.env.JWT_SECRET;
 
loginRouter.post('/',async(req,res)=>{

  try {
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!user)
      return res.status(401).send("User not found");

    const match= await bcrypt.compare(password,user.passwordHash);
      if(!match)
      return res.status(401).send("Wrong password");
    const token = jwt.sign(
      {email:user.email},
      SECRET,
      {expiresIn:'1h'}
    );
    res.send({
      success:true,
      message:"login successful",
      token,
      user
    });

  } catch (error) {
    res.status(500).send("server error")
  }
})

module.exports = loginRouter;