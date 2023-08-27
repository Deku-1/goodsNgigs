import jwt from "jsonwebtoken";
import express, { Router } from 'express';
import {authenticate, SECRET } from "../middleware/middle";
import { signupInput } from "../../common/index"
import { User } from "../db/db";

const router = express.Router();
router.post('/signup',async (req,res) => {
    let parsedInput= signupInput.safeParse(req.body)
    if (!parsedInput.success) {
        return res.status(403)
    
      }
      const username = parsedInput.data.username 
      const password = parsedInput.data.password 
      const email = parsedInput.data.email 

      const user = await User.findOne({ username: parsedInput.data.username });
      const emaill = await User.findOne({ username: parsedInput.data.email });

      if (user) {
      if (emaill) {
        res.status(400).json({ message: 'Account already exist' });
      }else  {
        res.status(403).json({ message: 'Username already exists' });
    }
      } else {
        if (emaill) {
          res.status(403).json({ message: 'Email already exists' });

        }else {

          const newUser = new User({ username, password,email });
          await newUser.save();
          const id=newUser._id;
          
          const token = jwt.sign({ id: id,username:username }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'User created successfully', token });
        }
      }
})
  
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const id=user._id
    const token = jwt.sign({ id:id,username:username }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});
router.get('/me',authenticate,async(req,res)=>{
    const username= req.headers['username'];
    console.log(username);
    if (username) {
      res.json( {username});
    } else {
      res.status(403).json({ message: 'User not logged in' });
    }
})
export default router
