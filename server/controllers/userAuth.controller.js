import User from "../model/user.model.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const saltRound = 10;

const secretKey = process.env.SECRET_KEY;

export const userSignup = async (req, res) => {
    //check if user  already exists in the database
    const { username, password, name, email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        existingUser ? res.status(400).json({ message: "User already exists" }) : null;
        const hashPassword = await bcrypt.hash(password, saltRound);
        const createUser = new User({
            username,
            password: hashPassword,
            email,
            name
        })
        await createUser.save();
        console.log(createUser);
    } catch (error) {
        console.log(error)
    }
}

export const usersignin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({ email: email });
        !existUser ? res.status(400).json({ message: "User does not exist" }) : null;
        const checkPassword = await bcrypt.compare(password, existUser.password);
        const jwtPayload = {
            userId: existUser._id,
            username: existUser.username,
        }
        const token = jwt.sign(jwtPayload, secretKey, { expiresIn: "1h" });
        const { password: pass, ...userData } = existUser._doc;
        res
            .status(200, { message: "Login successful" })
            .cookie("token", token, { httpOnly: true })
            .json(userData);
    } catch (error) {
        console.log(error)
    }
}