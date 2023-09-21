import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

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
