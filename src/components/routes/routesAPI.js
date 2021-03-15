const express = require('express');


const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var employee = require("../pages/employee")

app.get('/employee', (req, res) => res.send("you are here"));