const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all students
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM info";
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

// Get individual student by ID
app.get("/api/student/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM info WHERE id = ?";
    db.query(sqlGet, [id], (error, result) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result[0]);
        }
    });
});

// Default route
app.get("/", (req, res) => {
    res.send("Hello everyone");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});