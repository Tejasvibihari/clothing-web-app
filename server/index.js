import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost:27017/clothingDB")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err)
    });

app.get("/", (req, res) => { res.send("Hello World") });

app.listen("3000", (req, res) => {
    console.log("Server is running on port 3000");
})