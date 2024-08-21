import {Post} from "../models/post.js"
export const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = new Post({
            title,
            content,
            author: req.user.userId
        });
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Post creation failed' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};

export const deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        let post = await Post.findByIdAndDelete(id);
        if (!post) return res.status(404).send("Couldn't retrieve post")
    } catch (e) {
        res.status(500).json({ error: `${e.message}` });
    }
}
