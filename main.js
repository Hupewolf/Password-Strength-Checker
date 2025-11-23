const input = document.getElementById("password");
const text = document.querySelector(".kq");

input.addEventListener("input", function () {
    const test = input.value;

    const a = test.length >= 8;
    const b = /[a-z]/.test(test);
    const c = /[A-Z]/.test(test);
    const d = /[0-9!@#$%^&*(),.?":{}|<>]/.test(test);

    let score = 0;
        if (a) score++;
        if (b) score++;
        if (c) score++;
        if (d) score++;

    if (score === 1) {
        text.innerHTML = "Weak";
        text.style.color = "red";

    } 
    else if (score === 2 || score === 3) {
        text.innerHTML = "Medium";
        text.style.color = "orange";

    } 
    else if (score === 4) {
        text.innerHTML = "Strong";
        text.style.color = "green";

    } 
    else {
        text.innerHTML = "";
    }
});