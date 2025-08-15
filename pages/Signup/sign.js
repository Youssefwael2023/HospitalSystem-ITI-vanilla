let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    // alert("Signing up: " + username + ", " + email + ", " + password);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Sign up successful! You can now log in with your credentials.");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    window.location.href = "../login/login.html";
});