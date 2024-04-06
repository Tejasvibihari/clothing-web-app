import express from 'express';
import { usersignin, userSignup, checkusername, checkemail } from '../controllers/userAuth.controller.js';

const router = express.Router();

router.post("/signup", userSignup);
router.post("/signin", usersignin);
router.post("/checkusername", checkusername);
router.post("/checkemail", checkemail);

export default router;