import { createPost, getAllPosts } from "../Controllers/postController.js";
import { verifyToken } from "../Middleware/verifyToken.js";
import express from 'express';


const router = express.Router();

router.post("/createpost",verifyToken,createPost)
router.get("/getposts",getAllPosts)

export default router;