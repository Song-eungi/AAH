

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
// const path = require('path')
// const pyPath = path.join(__dirname, 'd.py')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const iconv = require('iconv-lite');
let rs

app.post('/nlp', async(req,res)=>{
  const serverid = req.body.plzid;
  console.log(serverid);
  
  const spawn = require("child_process").spawn 
  const process = spawn('python',['d.py', req.body.plzid]);
  
  process.stdout.on('data', data => { 
      let myJsonString = (data.toString());
      myJsonString = eval(myJsonString);
      console.log(myJsonString);
      const sendText = {
        text : myJsonString,
    };
    res.send(sendText);
            
  });

})




const PORT = process.env.PORT || 8000;
app.listen(PORT,function() {
  console.log("Server is running on ", PORT);
})





