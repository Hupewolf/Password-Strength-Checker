const input = document.getElementById("password");
const strengthText = document.querySelector(".strength");

input.addEventListener("input", function () {
    const pwd = input.value;

    // 4 tiêu chí
    const isLong = pwd.length >= 8;
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumberOrSpecial = /[0-9!@#$%^&*(),.?":{}|<>]/.test(pwd);

    let score = 0;
        if (isLong) score++;
        if (hasLower) score++;
        if (hasUpper) score++;
        if (hasNumberOrSpecial) score++;

    // đánh giá
    if (score === 1) {
        strengthText.innerHTML = "Yếu";
        strengthText.style.color = "red";

    } else if (score === 2 || score === 3) {
        strengthText.innerHTML = "Trung bình";
        strengthText.style.color = "orange";

    } else if (score === 4) {
        strengthText.innerHTML = "Mạnh";
        strengthText.style.color = "green";

    } else {
        strengthText.innerHTML = "";
    }
});