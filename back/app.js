
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.pw3ko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(()=> {
    app.listen(3000, () => console.log('listen port 3000'))
}).catch( err => console.log(err))



// app.listen(3000, () => console.log('listen port 3000'))

