import express from "express";
const router = express.Router();

import { signin, signup,userImg,userStatus} from "../Controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.patch('/:id', userStatus);
router.patch('/:id/img', userImg);
export default router;