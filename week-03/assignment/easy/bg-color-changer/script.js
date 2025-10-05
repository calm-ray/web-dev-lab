document.querySelector(".button-group").addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        const color = e.target.className;
        document.querySelector("body").style.backgroundColor = color;
    }
})