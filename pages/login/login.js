let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "../appoinment/appoinment.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});