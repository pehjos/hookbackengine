import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost,commentPost } from '../Controllers/posts.js';

const router = express.Router();
 import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/',   createPost);
router.patch('/:id', updatePost);
router.delete('/:id',  deletePost);
router.post('/:id/likePost', likePost);
router.post('/:id/commentPost', commentPost);
export default router;