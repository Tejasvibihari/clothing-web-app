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
        const hashPassword = await bcrypt.hash(password, saltRound);
        const createUser = new User({
            username,
            password: hashPassword,
            email,
            name
        })
        await createUser.save();
        res.send({ message: "User created successfully" })
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export const checkusername = async (req, res) => {
    const { username } = req.body;
    try {
        const existingUserName = await User.findOne({ username: username });
        if (existingUserName) {
            res.send({ message: "Username already taken" })
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const checkemail = async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.send({ message: "Email already taken" })
        }
    }
    catch (error) {
        console.log(error);
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