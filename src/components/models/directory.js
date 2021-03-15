const express = require("express");
const mongojs = require("mongojs");


const app = express();

const databaseUrl = "Employees";
const collections = ["employee"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.post("/", (req, res) => {
    console.log(req.body);
    db.employee.insert(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// Listen on port 3000
app.listen(3001, () => {
    console.log("App running on port 3000!");
});