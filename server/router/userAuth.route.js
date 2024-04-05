import express from 'express';
import { usersignin, userSignup } from '../controllers/userAuth.controller.js';

const router = express.Router();

router.post("/signup", userSignup);
router.post("/signin", usersignin)

export default router;