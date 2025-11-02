const express = require("express");
const app = express();

app.use(express.json())

app.get("/add", function(req, res) {
    const {a, b} = req.query;
    result = parseInt(a) + parseInt(b);
    res.status(200).json({message: "Success", result});
})

app.get("/multiply", function(req, res) {
    const {a, b} = req.query;
    result = parseInt(a) * parseInt(b);
    res.status(200).json({message: "Success", result});
})

app.get("/subtract", function(req, res) {
    const {a, b} = req.query;
    result = parseInt(a) - parseInt(b);
    res.status(200).json({message: "Success", result});
})

app.get("/divide", function(req, res) {
    const {a, b} = req.query;
    result = parseInt(a) / parseInt(b);
    res.status(200).json({message: "Success", result});
})

app.listen(3000, () => console.log("Server started at port 3000"));