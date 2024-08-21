import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: {type: [String]}
}, {timestamps: true});
export const Post = mongoose.model('posts', postSchema);
