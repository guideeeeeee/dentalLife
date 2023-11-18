const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
//การสมัคร
const authRoutes = require("./routes/authroutes");
app.use("/auth", authRoutes);
//ข้อมูลในเว็บ
const myroutes = require("./routes/myroutes");
app.use("/api",myroutes);


app.listen(process.env.MY_PORT, () => {
  console.log("sever is running on port 3001")
});
