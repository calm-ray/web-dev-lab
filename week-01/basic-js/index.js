function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10))
console.log(sum("abc", 10))

function canVote(age) {
    return age >= 18;
}

console.log(canVote(25))

let user = {
    name: "Anjani",
    age: 20,
    gender: "Male"
}

function greet(user) {
    console.log(`Hi ${user.gender === "Male" ? "Mr": user.gender === "Female" ? "Mrs" : "Others"} ${user.name}! Your age is ${user.age}. `);
    if(user.age >= 18) {
        console.log("Allowed to vote");
    } else {
        console.log("Not allowed to vote");
    }
}

greet(user)

const users = [
    {
        name: "Anjani",
        age: 20,
        gender: "Male"
    }, {
        name: "Avinash",
        age: 11,
        gender: "Male"
    }, {
        name: "Priyanka",
        age: 21,
        gender: "Female"
    }
]

function findUser(users) {
    return users.filter(user => user.age >= 18 && user.gender === "Male");
}

console.log(findUser(users))