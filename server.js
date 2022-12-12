const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const db  = require("./config/db");
const userRoute = require("./routes/user");
db();
const app = express();
app.use(express.json());
app.use(express.static("public"))
app.use(cors());
const { errorHandler, error404 } = require("./middleware/error-midleware")
const authRoute=require("./routes/auth")

// route
app.use("/api/", userRoute);
app.use("/api/auth", authRoute);
app.use(error404)
app.use(errorHandler)
// route end

const { PORT } = process.env;
app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`)
);
