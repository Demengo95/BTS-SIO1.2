// script.js
function corriger() {
    let correctAnswers = {
        q1: "Natsu",
        q2: "Feu",
        q3: "Happy",
        q4: "Elle a été esclave",
        q5: "Ils sont chasseurs de dragons",
        q6: "Gérald",
        q7: "Luxus est le petit-fils de Marakov",
        q8: "Le 7 juillet",
        q9: "Il se déshabille tout le temps",
        q10: "Dans une forêt",
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
        let options = document.getElementsByName(q);
        options.forEach(option => {
            if (option.checked) {
                if (option.value === correctAnswers[q]) {
                    option.parentElement.style.backgroundColor = "green";
                    option.parentElement.style.color = "white";
                    score++;
                } else {
                    option.parentElement.style.backgroundColor = "red";
                    option.parentElement.style.color = "white";
                }
            }
        });
    }

    document.getElementById("score").innerText = `Score : ${score} / ${total}`;
    document.getElementById("score").classList.remove("hidden");
}

function afficherCorrige() {

    window.location.href = "correction.html"; 
}

function resetQuiz() {
    let options = document.querySelectorAll("input[type=radio]");
    options.forEach(option => {
        option.checked = false;
        option.parentElement.style.backgroundColor = "";
        option.parentElement.style.color = "";
    });
    document.getElementById("score").classList.add("hidden");
    document.getElementById("corrige").classList.add("hidden");
}
