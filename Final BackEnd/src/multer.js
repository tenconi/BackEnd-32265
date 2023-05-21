import multer from "multer";
import { __dirname } from "./utils.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/public/images"); // destino
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    cb(null, + `${Date.now()}.${ext}`  )
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const uploader = multer({ storage: storage }); // middleware

// hay otros con misma fx: s3 de amazon web services
