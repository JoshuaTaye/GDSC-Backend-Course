const Post = require('../models/Post');

exports.createPost = async (req, res) => {
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

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username').exec();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};
