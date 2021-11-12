import mongoose from 'mongoose'


const { Schema } = mongoose;

const userModel = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})


export default mongoose.model('User', userModel);