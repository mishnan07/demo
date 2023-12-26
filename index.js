const express = require('express')
const mongoose = require('mongoose')

const userModel = require('./userModel')

const app = express()

const  firstName ='mishnan'
const  lastName = 'C'
const  email = 'mishnanc@gmail.com'



        mongoose.connect('mongodb://localhost:27017/newDatabase')
        .then(()=>{
         app.listen(3000,()=>{
            console.log('server is running');
         })
        }).catch((err)=>{
            console.log('database not connected',err);
        })


        app.post('/home',async(req,res)=>{
            console.log('kkkkkkkkkkk');
            const user = new userModel({
                firstName:firstName,
                lastName:lastName,
                email:email
            })
           await user.save()
        })
