const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const app = express();
dotenv.config();



// default option
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());
//การสมัคร
const authRoutes = require("./routes/authroutes");
app.use("/auth", authRoutes);
//ข้อมูลในเว็บ
const myroutes = require("./routes/myroutes");
app.use("/api",myroutes);

app.post("/api/uploadDent", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const uploadedFile = req.files.file; // "myFile" ต้องตรงกับชื่อ field ใน form-data
  const uploadPath = "E:/dental-life2/DentalLife/client/public/imagdentis/upload/";

  uploadedFile.mv(uploadPath + uploadedFile.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send("File uploaded!");
  });
});



app.listen(process.env.MY_PORT, () => {
  console.log("sever is running on port 3001")
});
