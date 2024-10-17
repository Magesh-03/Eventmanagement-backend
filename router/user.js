import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt'
import Users from '../models/user.js';

router.route('/').get((req,res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+err ))
})

router.post('/register',(req,res) => {
    Users.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

router.post("/login",(req,res) =>{
    const{username,password} = req.body;
    Users.findOne({username:username})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is in correct")
            }
        } else{res.json("No record existed")}
    })
})
   
export default router;

