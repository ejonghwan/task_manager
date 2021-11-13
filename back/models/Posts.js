import mongoose from 'mongoose';

const { Schema } = mongoose;


const Posts = new Schema({
    title: {
        type: String,
        require: true,
    },
    constent: {
        type: String,
        require: true,
    }
})

export default mongoose.model('Posts', Posts)