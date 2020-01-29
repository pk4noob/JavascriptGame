var questions = {
    q1: ["The sky is blue.", "t"],
    q2: ["There are 365 days in a year.", "t"],
    q3: ["There are 42 ounces in a pound.", "f"],
    q4: ["The Declaration of Independence was created in 1745.", "f"],
    q5: ["Bananas are vegetables.", "f"]
};

let arrQuestions = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
let score = 0;
let qIndex = 0;

function renderQuestions() {
    if (qIndex <= (arrQuestions.length - 1)) {
        document.querySelector("#question").innerHTML = arrQuestions[qIndex][0];
    } else {
        document.querySelector('#question').innerHTML = 'Game Over! ';
        document.querySelector('#score').innerHTML = 'Final Score: ' + score + ' out of ' + arrQuestions.length;
    }
}

function scoreUpdate() {
    document.querySelector('#score').innerHTML = "Score: " + score;
}

renderQuestions();
scoreUpdate();

document.onkeyup = function (event) {
    if (qIndex === arrQuestions.length) {
        return;
    }

    var userInput = String.fromCharCode(event.which).toLowerCase();

    if (userInput === 't' || userInput === 'f') {
        if (userInput === arrQuestions[qIndex][1]) {
            alert('Correct')
            score++
            scoreUpdate();
        } else {
            alert("Wrong")
        }
        qIndex++
        renderQuestions();
    }

    a
}