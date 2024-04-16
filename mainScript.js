const startBtn = document.getElementById("startButton");
const submitBtn = document.getElementById("submit");
const modal = document.getElementById("QuestionsContain");
const error = document.getElementById("errorModal");
const closeErrBtn = document.getElementById("closeError");
const errorMsg = document.getElementById("errorMessage");
const closeBtn = document.getElementById("closeBtn");
startBtn.addEventListener("click", () => {
    modal.showModal();
});

closeBtn.addEventListener("click", close);
function close() {
    modal.close();
}
function sub() {
    let unansweredQs = [];
    let hasError = false;
    let q1 = "";
    for (let elementx of document.querySelectorAll(".q1c:checked")) {
        q1 += " , " + elementx.value;
    }
    if (q1 === "") {
        q1 = "None";
    }

    q1 = q1.substring(2, q1.length);

    let q2 = document.querySelector("input[name='chc0']:checked");

    if (q2 === null || q2 === undefined) {
        hasError = true;
        unansweredQs.push("Question 2");
    }

    localStorage.setItem("Missed tasks due to competition?", q2);

    let q3 = document.querySelector("input[name='chc1']:checked");

    if (q3 === null || q3 === undefined) {
        hasError = true;
        unansweredQs.push("Question 3");
    }

    let q4 = "";
    for (let elementx of document.querySelectorAll(".q4c:checked")) {
        q4 += " , " + elementx.value;
    }

    if (q4 === "") {
        q4 = "None";
    }

    let q5 = document.querySelector("input[name='chc2']:checked");

    if (q5 === null || q5 === undefined) {
        hasError = true;
        unansweredQs.push("Question 5");
    }

    let q6 = document.querySelector("input[name='chc3']:checked");

    if (q6 === null || q6 === undefined) {
        hasError = true;
        unansweredQs.push("Question 6");
    }

    let q7 = document.querySelector("input[name='chc4']:checked");

    if (q7 === null || q7 === undefined) {
        hasError = true;
        unansweredQs.push("Question 7");
    }

    let q8 = document.querySelector(".q8c").value;
    let q9 = document.querySelector(".q9c").value;
    if (!q8.trim()) {
        hasError === true;
        unansweredQs.push("Question 8");
    }
    if (!q9.trim()) {
        hasError === true;
        unansweredQs.push("Question 9");
    }

    let q10 = document.querySelector("input[name='chcl']:checked");

    if (q10 === null || q10 === undefined) {
        hasError = true;
        unansweredQs.push("Question 10 ( Satisfaction review )");
    }

    if (!hasError) {
        localStorage.setItem("Competitions Joined", q1);
        localStorage.setItem("Missed tasks due to competition?", q2.value);
        localStorage.setItem("Amount of tasks accumulated", q3.value);
        localStorage.setItem(
            "Subjects with missing tasks due to compeition",
            q4
        );
        localStorage.setItem(
            "Do you think these affected your grades?",
            q5.value
        );

        localStorage.setItem(
            "Will you join these competitions again in the future?",
            q6.value
        );

        localStorage.setItem(
            "Do you think joining these competitions is worth it?",
            q7.value
        );

        localStorage.setItem("Reason to previous 2 questions", q8);

        localStorage.setItem(
            "How to avoid missing tasks during competitions and intensive training?",
            q9
        );

        localStorage.setItem("Satisfaction of user", q10.value);
    } else {
        let unansweredQsAsString = unansweredQs.join(", ");
        console.log(unansweredQs);
        errorMsg.innerText = "Unanswered questions: " + unansweredQsAsString;

        error.showModal();
    }
}

submitBtn.addEventListener("click", sub);

closeErrBtn.addEventListener("click", () => {
    error.close();
});
