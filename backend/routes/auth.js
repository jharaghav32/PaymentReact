
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "ragsonrakalkmunhar";


// using post request using post request /api/auth
router.post('/signup',[
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
],async (req,res)=>{
  let success=true;
  // return error if there exist a error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check whether user exist for unique email
  try{
    
    let user = await User.findOne({email:req.body.email})
    
    if(user){
      success=false;
      return res.status(400).json({success,error : 'sorry user with this email already exist'})
    }
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    // create a new user 
    user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password: hashedPassword,
      })
      const data = {
        user:{
          id : user.id
        }
      }
      const token = jwt.sign(data,JWT_SECRET)
      res.json({success,token})
    }
    catch(error){
      console.error(error.message)
      res.status(500).send("some error found")
    }
    
} )
// authenticate a user using post "/api/auth/login" no login required 
router.post('/login',[
  body('email').isEmail(),
  body('password').exists()
],async (req,res)=>{
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password}=req.body
  try {
    let user = await User.findOne({email})
    // if user doesn't exist then send error
    if(!user){
      return res.status(400).json({error : "please try again with correct credential"})
    }
    const compare = await bcrypt.compare(password,user.password);
    if(!compare){
        success=false;
        return res.status(404).json("Invalid Id");
    }
    
    // if user password is correct then we provide him a auth token
    const payload = {
      user:{
        id : user.id
      }
    }
    const token = jwt.sign(payload,JWT_SECRET)
    success=true;
    res.json({success,token})
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }
})

module.exports=router;
