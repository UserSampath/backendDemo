const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;

const DB_URL = "mongodb+srv://lenzz:lenzz@cluster0.tlhtjlj.mongodb.net/lenzzDb?retryWrites=true&w=majority";

const studentRoute = require("./routes/student");

//This will suppress the warning and make Mongoose to raise an error when unknown query options are passed to a query.
mongoose.set("strictQuery", true);

//middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(studentRoute);

mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.log(`Database connection Error`, error);
    });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
