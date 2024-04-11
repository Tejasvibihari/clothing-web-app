import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./router/userAuth.route.js"
import addProductRouter from "./router/product.route.js"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// Connect to MongoDB database

mongoose.connect("mongodb://localhost:27017/clothingDB")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err)
    });

app.get("/", (req, res) => { res.send("Hello World") });

app.use("/api/user", userRouter);
app.use("/api/product", addProductRouter);
app.listen("3000", (req, res) => {
    console.log("Server is running on port 3000");
})


