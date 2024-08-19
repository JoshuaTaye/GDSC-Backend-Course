const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();
router.get('/', getPosts);
router.post('/', authMiddleware, createPost);
module.exports = router;
