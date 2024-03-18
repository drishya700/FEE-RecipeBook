const loginForm = document.querySelector(".wrapper form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registered Successfully");
    window.location.href = "index.html";
});