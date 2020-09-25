const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require("./routes/userRoutes");

const app = express();

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("open", () => {
    console.log("database connected");
});

app.use("/user", userRouter);


app.get("/",function(request, response) {
    response.send("working...");
});

app.listen(5000, function(request, response) {
    console.log("server running on port 5000...");
});
