const body = document.querySelector("body");

let currentQuiz = 0;
let result = 0;

render(quizData[currentQuiz]);

body.addEventListener("click", (e) => {
  if (e.target.matches("button.reload")) {
    currentQuiz = 0;
    result = 0;
    render(quizData[currentQuiz]);
  }
});
body.addEventListener("submit", (e) => {
  const classList = e.target.classList;

  if (classList.contains("quiz-form")) {
    e.preventDefault();
    const selectedAnswer = document.querySelector(
      "input[name='answer']:checked"
    );
    if (selectedAnswer.value === quizData[currentQuiz].correct) result += 1;

    currentQuiz++;

    if (currentQuiz === quizData.length) {
      console.log(result)
      render(null);
    } else {
      render(quizData[currentQuiz]);
    }
  }
});

function render(data) {
  body.innerHTML = "";

  const quizDiv = document.createElement("div");
  const quizHeader = document.createElement("h1");
  const quizSubmit = document.createElement("button");

  quizHeader.setAttribute("class", "quiz-header");
  quizDiv.setAttribute("class", "quiz-div");

  if (data !== null) {
    
    const quizForm = document.createElement("form");

    quizForm.setAttribute("class", "quiz-form");
    quizSubmit.setAttribute("type", "submit");

    for (let i = 97; i <= 100; i++) {
      let key = String.fromCharCode(i);

      const quizLabel = document.createElement("label");
      const quizInput = document.createElement("input");
      const quizText = document.createElement("span");
      const br = document.createElement("br");

      quizInput.setAttribute("type", "radio");
      quizInput.setAttribute("name", "answer");
      quizInput.setAttribute("value", key);

      quizLabel.appendChild(quizInput);
      quizText.textContent = data[key];
      quizLabel.appendChild(quizText);

      quizForm.appendChild(quizLabel);
      quizForm.appendChild(br);
    }

    quizSubmit.textContent = "Submit";
    quizForm.appendChild(quizSubmit);

    quizHeader.textContent = data.question;
    quizDiv.append(quizHeader, quizForm);
    body.appendChild(quizDiv);
  } else {
    console.log("Inside data null");
    
    quizHeader.textContent = `You have answered ${result}/${currentQuiz} questions correctly`;
    quizSubmit.setAttribute("type", "button");
    quizSubmit.setAttribute("class", "reload")
    quizSubmit.textContent = "Reload";
    quizDiv.append(quizHeader, quizSubmit);
    body.appendChild(quizDiv);
    currentQuiz = 0;
    result = 0;
  }
}
