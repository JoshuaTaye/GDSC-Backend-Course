import {Post} from "../models/post.js"
export const createPost = async (req, res) => {
    const post = req.body;
    console.log(post)
    try {
        const newPost = Post.create(post);
        if (newPost)
        res.status(201).json({ message: 'Post created successfully!' });
    } catch (error) {
        console.log(error.message);
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

export const getPost = async (req, res) => {
    try{
        const id = req.params.id
        const post = await Post.findById(id);
        if (!post) return res.status(404).send("Blog Post Doesn't exist.")
        res.json(post);
    } catch (e) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
}

export const deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        let post = await Post.findByIdAndDelete(id);
        if (!post) return res.status(404).send("Couldn't retrieve post");
        return res.status(204).send(post);
    } catch (e) {
        res.status(500).json({ error: `${e.message}` });
    }
}

export const updatePost = async (req, res) => {
    try{
        console.log(req.body)
        const id = req.params.id;
        const post = await Post.findById(id);
        if (!post) return res.status(404).send("Couldn't retrieve post");
        Object.keys(req.body).forEach(key => {
                post[key] = req.body[key];
        });
        await post.save();
        res.status(201).json("Post updated successfully!");
    }catch (e) {
        console.log(e)
        res.status(500).json({error: `${e.message}`})
    }
}
