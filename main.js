const input = document.getElementById("password");
const strengthText = document.querySelector(".kq");

input.addEventListener("input", function () {
    const test = input.value;

    // 4 tiêu chí
    const a = test.length >= 8;
    const b = /[a-z]/.test(test);
    const c = /[A-Z]/.test(test);
    const d = /[0-9!@#$%^&*(),.?":{}|<>]/.test(test);

    let score = 0;
        if (a) score++;
        if (b) score++;
        if (c) score++;
        if (d) score++;

    // đánh giá
    if (score === 1) {
        strengthText.innerHTML = "Weak";
        strengthText.style.color = "red";

    } 
    else if (score === 2 || score === 3) {
        strengthText.innerHTML = "Medium";
        strengthText.style.color = "orange";

    } 
    else if (score === 4) {
        strengthText.innerHTML = "Strong";
        strengthText.style.color = "green";

    } 
    else {
        strengthText.innerHTML = "";
    }
});