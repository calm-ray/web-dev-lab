let count = 0

let updateCounter = () => {
    console.log(count++);
    setTimeout(updateCounter, 1000);
}

updateCounter()