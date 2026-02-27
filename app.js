require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

// DB Connection
// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// app.use("/api", taskRoutes);
//================
async function dbconnection() {
  try {
    const url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log("DB is connect");
  } catch (error) {
    console.log(error);

  }
}

//=========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
