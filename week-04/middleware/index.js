const express = require("express");
const app = express();

// returns a boolean when age is > 14
function checkAge(age) {
    if (age >= 14) return true;
    else return false;
}

function checkAgeMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Age restriction",
        });
    }
}

app.get("/ride1", function (req, res) {
    if (checkAge(req.query.age)) {
        res.status(200).json({
            msg: "You have successfully riden the ride 1",
        });
    } else {
        res.status(411).json({
            msg: "Age restriction",
        });
    }
});

app.get("/ride2", checkAgeMiddleware, function (req, res) {
    res.status(200).json({
        msg: "You have successfully riden the ride 2",
    });
})

app.listen(3000);
