//Funktion um Passwort einzusehen
document.getElementById("togglePassword").addEventListener("click", togglePassword);


function togglePassword() {
    var passwordField = document.getElementById('password');
    var lockIcon = document.getElementById('togglePassword');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        lockIcon.className = "fa-solid fa-lock-open";
    } else {
        passwordField.type = "password";
        lockIcon.className = "fa-solid fa-lock";
    }
}

function add(id) {
    var numberField = document.getElementById(id);
    if (parseInt(numberField.value) < 100) {
        numberField.value = parseInt(numberField.value) + 1;
    }
}

function subtract(id) {
    var numberField = document.getElementById(id);
    if (parseInt(numberField.value) > 1) {
        numberField.value = parseInt(numberField.value) - 1;
    }
}

