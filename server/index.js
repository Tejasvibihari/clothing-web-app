import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./router/userAuth.route.js"
import addProductRouter from "./router/addProduct.route.js"

const app = express();
app.use(express.json());

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
app.use("/api/addproduct", addProductRouter);
app.listen("3000", (req, res) => {
    console.log("Server is running on port 3000");
})


