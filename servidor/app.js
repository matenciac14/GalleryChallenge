const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

//inicializaciones
const app = express();
require("./database");

//configuraciones
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//middleware
app.use(morgan("dev"));
app.use(cors());
//configuracion de multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
    //cb(null, Date.now() + '-' +file.originalname )
  }
});
app.use(multer({ storage }).single("image"));

//routes
app.use(require("./routes"));

module.exports = app;
