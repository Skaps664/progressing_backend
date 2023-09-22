import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();
const port = 3000;

app.use("api/users, router  ");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.6haoave.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () =>
      console.log(`Connected to database and listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
