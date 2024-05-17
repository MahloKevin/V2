document.addEventListener('DOMContentLoaded', function () {
    // Passwort-Änderung Event-Listener
    let togglePasswordButton = document.getElementById("togglePassword");
    if (togglePasswordButton) {
        togglePasswordButton.addEventListener("click", togglePassword);
    } else {
        console.error("Das Element mit der ID 'togglePassword' wurde nicht gefunden.");
    }

    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", login);
    } else {
        console.error("Das Element mit der ID 'loginForm' wurde nicht gefunden.");
    }
});

function togglePassword() {
    let passwordField = document.getElementById('password');
    let lockIcon = document.getElementById('togglePassword');
    if (passwordField && lockIcon) {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            lockIcon.className = "fa-solid fa-lock-open";
        } else {
            passwordField.type = "password";
            lockIcon.className = "fa-solid fa-lock";
        }
    } else {
        console.error("Ein erforderliches Element für 'togglePassword' fehlt.");
    }
}

function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('URL_DEINES_BACKENDS', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Fehler:', error));
}

function add(id) {
    let numberField = document.getElementById(id);
    if (numberField) {
        let currentValue = parseInt(numberField.value);
        if (!isNaN(currentValue) && currentValue < 100) {
            numberField.value = currentValue + 1;
        }
    } else {
        console.error("Das Element mit der ID '" + id + "' wurde nicht gefunden.");
    }
}

function subtract(id) {
    let numberField = document.getElementById(id);
    if (numberField) {
        let currentValue = parseInt(numberField.value);
        if (!isNaN(currentValue) && currentValue > 1) {
            numberField.value = currentValue - 1;
        }
    } else {
        console.error("Das Element mit der ID '" + id + "' wurde nicht gefunden.");
    }
}
