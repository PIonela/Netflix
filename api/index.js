const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")

dotenv.config();

//main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGO_URL);

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(() => console.log("DB Connection Successfull")).catch(err => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/movies", movieRoute);
// app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log("Backend server is running!")
})
