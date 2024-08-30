const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://user1:admin@cluster.g2ob4.mongodb.net/crud");

const userSchema = new mongoose.Schema({
    name: String,
    age:Number
});
const userModel = mongoose.model("emp", userSchema)

const emp1 = new userModel({
    name: "Junaid",
    age:18
});
const emp2 = new userModel({
    name: "Kamal",
    age:20
})


emp1.save();
emp2.save();

app.listen("3001", () => {
    console.log("Server is running on port 3001")
});