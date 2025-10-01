const fs = require('fs').promises

async function readFileAsync(filename) {
    try {
        const data = await fs.readFile(filename, "utf-8");
        return data;
    } catch(err) {
        console.log("Error while reading file!", err);
        return null;
    }
}

async function writeToFileAsync(filename, modifiedString) {
    try {
        await fs.writeFile(filename, modifiedString, "utf-8");
        console.log("File has been written successfully");
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

readFileAsync("examples.txt").then((data) => {
    const cleanedContent = data.replace(/\s+/g, ' ').trim();

    writeToFileAsync("examples.txt", cleanedContent).then(() => {})
}).catch(err => {
    console.log(err);
})