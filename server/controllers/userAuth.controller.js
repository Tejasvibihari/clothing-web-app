import User from "../model/user.model.js";
import bcrypt from 'bcrypt';

const saltRound = 10;


export const userSignup = async (req, res) => {
    //check if user  already exists in the database
    const { username, password, name, email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        existingUser ? res.status(400).json({ message: "User already exists" }) : null;
        const hashPassword = await bcrypt.hash(password, saltRound);
        console.log(hashPassword)
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
