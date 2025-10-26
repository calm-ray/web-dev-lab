const { program } = require("commander")
const fs = require("fs");

program
    .argument('<string>')

program.parse()

const filePath = program.args[0];

fs.readFile(filePath, 'utf8', function(err, data) {
    if(err) {
        console.error("Error while reading file");
    } else {
        console.log(`You have ${data.split(" ").length} words in the file`);
    }
})
