

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    creator:String,
    name:String,
   user:String,
  status:String,
 photo:String,
    accountType:String,
    title:String, 
    Tracks:String,
    description:String,
    image:String,
    video:String,
    tags: [String],
    likes: {
        type: [String],
        default:[],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;