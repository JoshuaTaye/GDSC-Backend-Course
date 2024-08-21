import express from "express";
import {createPost, deletePost, getPost, getPosts} from '../controllers/postController.js';
// import {authMiddleware} from '../middleware/auth.js';
export const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.delete('/:id', deletePost);
export default router;