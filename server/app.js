/* 

================== Most Important ==================
* Issue 1 :
In uploads folder you need create 3 folder like bellow.
Folder structure will be like: 
public -> uploads -> 1. products 2. customize 3. categories
*** Now This folder will automatically create when we run the server file

* Issue 2:
For admin signup just go to the auth 
controller then newUser obj, you will 
find a role field. role:1 for admin signup & 
role: 0 or by default it for customer signup.
go user model and see the role field.

*/

const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");
// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");
const CreateAllFolder = require("./config/uploadFolderCreateScript");

/* Create All Uploads Folder if not exists | For Uploading Images */
CreateAllFolder();

// Database Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log(
      "==============Mongodb Database Connected Successfully=============="
    )
  )
  .catch((err) => console.log("Database Not Connected !!!"));

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);


const mysql = require('mysql');
const db = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'asas4041',
    database : 'apple'
});

app.get('/', (req, res) => {
    res.send('연결 되었습니다.')
});

app.get('/api/concat', (req, res,) => {
  db.query("SELECT * FROM apple.concat", (err, rows) => {
    if (err) {
        console.log('err');
        res.send(err);
    } else{
        console.log('success');
        res.send(rows);
    }
});
});



//
// const multer = require('multer');
// const path = require('path');
// const uploader = multer({
//     storage: multer.diskStorage({
//         destination(req,file,cb){
//             cb(null, 'upload/');
//         },
//         filename(req,file,cb){
//             const ext = path.extname(file.originalname);
//             cb(null, 'file_'+Date.now()+ext);
//         }
//     }),
//     limits: {fileSize: 5*1024*1024},
// });
// const spawn = require('child_process').spawn


// app.post('/', uploader.single('image'),async(req,res)=>{
//     //spawn으로 파이썬 스크립트 실행
//     //실행할 파일(app.py)와  매개변수로 저장된 파일명을 전달
//     const net = spawn('python',['app.py',req.file.filename]);
    
//     //파이썬 파일 수행 결과를 받아온다
//     net.stdout.on('data', function(data) { 
//         console.log(data);
//         console.log(data.toString());
//         if(data.toString() == 'nsfw')
//             res.status(200).send('nsfw')
//         else
//             res.status(200).send('sfw')
//     })
// })







// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
