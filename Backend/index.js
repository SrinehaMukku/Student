const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database:"student"
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

 app.get("/api/get" ,(req,res) => {
    const sqlGet = "SELECT * FROM info";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});
   app.get("/",(req,res) => {
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})