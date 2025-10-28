const express = require("express");
const app = express();

app.use(express.json())

let todos = [];
let id = 0;

app.get("/", function(req, res) {
    res.status(200).json({message: "Success", data: todos});
})

app.post("/", function(req, res) {
    const {description} = req.body;

    if(!description) return res.status(400).json({message: "Description not provided"})
    const todoObj = {
        id: id++,
        description: description
    }
    todos.push(todoObj);

    res.status(201).json({message: "Success"});
});

app.put("/", function(req, res) {
    const {id, description} = req.body;

    if(!id) return res.status(400).json({message: "ID not provided"});
    if(!description) return res.status(400).json({message: "Description not provided"});

    const index = todos.findIndex(t => id === t.id);

    if(index === -1) res.status(404).json({message: "No todo found"});

    todos[index].description = description;

    res.status(200).send("Success");
});

app.delete("/", function(req, res) {
    const {id} = req.body;

    if(id === undefined) return res.status(400).json({message: "ID not provided"});

    const index = todos.findIndex(t => id === t.id);

    if(index === -1) return res.status(404).json({message: "No todo found for given id"});

    todos.splice(index, 1);

    res.status(200).json({message: "Success", data: todos})
})

app.listen(3000);