const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

async function readJsonFile(filename) {
    try {
        const str = await fs.readFile(path.join(__dirname, filename), "utf8");
        const data = JSON.parse(str);
        return data;
    } catch (err) {
        console.error("Error parsing JSON string:", err);
        return [];
    }
}

async function writeToJsonFile(filename, data) {
    try {
        const jsonString = JSON.stringify(data, null, 4);
        await fs.writeFile(path.join(__dirname, filename), jsonString, "utf8");
        console.log(`JSON data successfully written to ${filename}`);
    } catch (err) {
        console.error(`Error writing JSON to file: ${err}`);
    }
}

app.get("/", async function (req, res) {
    let data = await readJsonFile("todo.json");
    res.status(200).json({ message: "Success", data });
});

app.post("/", async function (req, res) {

    try {
        let data = await readJsonFile("todo.json");

        const { userId, userName, todoDescription } = req.body;

        if (userId < 0) {
            let todo = {
                todoId: 1,
                todoDescription
            }

            let todos = [];
            todos.push(todo);

            const newUserId = data.length > 0 ? data[data.length - 1].userId + 1 : 1;
            let user = {
                userId: newUserId,
                userName,
                todos
            }
            data.push(user);

        } else {
            const index = data.findIndex((user) => user.userId === userId);
            if (index === -1) return res.status(404).json({ message: "No user found" });

            let selectedUser = data[index];
            let selectedUserTodos = selectedUser.todos;

            const newTodoId = selectedUserTodos.length > 0
                ? selectedUserTodos[selectedUserTodos.length - 1].todoId + 1
                : 1;
            let todo = {
                todoId: newTodoId,
                todoDescription,
            };

            selectedUserTodos.push(todo);
        }

        await writeToJsonFile("todo.json", data);

        res.status(200).json({ message: "Success" });

    } catch (err) {
        console.error("Error handling POST /:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

app.delete("/", async function (req, res) {
    try {
        let data = await readJsonFile("todo.json");

        const {userId, todoId} = req.body;
        
        const userIndex = data.findIndex(user => user.userId === userId);
        if(userIndex === -1) return res.status(404).json({ message: "No user found" });

        let user = data[userIndex];
        const todoIndex = user.todos.findIndex(todo => todo.todoId === todoId);

        if(todoIndex === -1) return res.status(404).json({ message: "No todo found" });

        user.todos.splice(todoIndex, 1);

        await writeToJsonFile("todo.json", data);

        res.status(200).json({message: "Success", data});
    } catch(err) {
        console.error("Error handling POST /:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.put("/", async function (req, res) {
    try {
        let data = await readJsonFile("todo.json");

        const {userId, todoId, todoDescription} = req.body;

        const userIndex = data.findIndex(user => user.userId === userId);
        if(userIndex === -1) return res.status(404).json({ message: "No user found" });

        let user = data[userIndex];
        let usersTodo = user.todos;
        const todoIndex = usersTodo.findIndex(todo => todo.todoId === todoId);
        if(todoIndex === -1) return res.status(404).json({ message: "No todo found" });

        let todo = usersTodo[todoIndex];
        todo.todoDescription = todoDescription;

        await writeToJsonFile("todo.json", data);

        res.status(200).json({message: "Success", data})
    } catch(err) {
        console.error("Error handling POST /:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log("Server started at port 3000"));
