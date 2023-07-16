const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/UserRoutes")
const ReviewRouter = require("./Routes/ReviewRoutes")
const app = express();

app.use(express.json());
app.use(cors());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zaemoncoder:reviewhub123@reviewhub.e4kzih9.mongodb.net/REVIEWHUB?retryWrites=true&w=majority"
    );
    console.log("Connected to Database");
  } catch (error) {
    console.log(`Error connecting to database : ${error}`);
  }
};
connectToDatabase()

app.use("/auth",UserRouter)
app.use("/review",ReviewRouter)
app.listen(3001, () => {
  console.log("Server Started");
});
