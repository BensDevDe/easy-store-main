const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());
//
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", require("./routes/User"));


app.listen(process.env.PORT || 5001, () =>
  console.log(`server Up on ${process.env.PORT || 5001}`)
);
