
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { body, Result, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs';

import User from './models/User.js'

dotenv.config();
const app = express();
app.use(bodyParser.json())


app.post('/auth/signup', [
    // express-validator 
    body('email')
    .isEmail()
    .withMessage('plesae type valid email')
    .custom((value) => {
        return User.findOne({email: value}).then((userDoc) => {
            if(userDoc) {
                return Promise.reject('이미 존재하는 이메일')
            }
        })
    }),

    body('password')
    .trim()
    .isLength({min: 6})
    .withMessage('password length min 6'),

    body('name')
    .trim()
    .not().isEmpty()
    .withMessage('name empty')

], async (req, res, next) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        const error = new Error('validation error');
        error.statusCode = 422;
        error.data = errors.array();
        next(error)
    }

    console.log(req.body)
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email,
            name,
            password: hashedPassword,
        })

        const result = await user.save()

        res.status(201).json({
            message: '201',
            user: result,
        })
    } catch(err) { 
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(err)
    }

    res.json({
        msg: 'succse'
    })
})



app.use( (error, req, res, next) => {

        const status = error.statusCode || 500;
        const message = error.message;
        const data = error.data;
        res.status(status).json({ message, data })

})



mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.pw3ko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(()=> {
    app.listen(3000, () => console.log('listen port 3000'))
}).catch( err => console.log(err))

