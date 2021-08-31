const form = document.getElementById("maker__form")
const success = document.getElementById("success")
const error = document.getElementById("error")
const email = document.querySelector(".email")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        success.classList.add("show");
        error.classList.remove("show");
    } else {
        error.classList.add("show");
        success.classList.remove("show");

    }
})













