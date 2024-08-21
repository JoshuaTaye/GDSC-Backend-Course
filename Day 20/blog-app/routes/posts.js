import express from "express";
import { createPost, getPosts } from '../controllers/postController.js';
import {authMiddleware} from '../middleware/auth.js';
export const router = express.Router();
router.get('/', getPosts);
router.post('/', authMiddleware, createPost);
export default router;