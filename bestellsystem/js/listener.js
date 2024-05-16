document.addEventListener('DOMContentLoaded', function () {
    // Passwort-Änderung Event-Listener
    let togglePasswordButton = document.getElementById("togglePassword");
    if (togglePasswordButton) {
        togglePasswordButton.addEventListener("click", togglePassword);
    } else {
        console.error("Das Element mit der ID 'togglePassword' wurde nicht gefunden.");
    }

    // Profilbild-Änderung Event-Listener
    let profilePicInput = document.getElementById('profilePic');
    if (profilePicInput) {
        profilePicInput.addEventListener('change', handleProfilePicChange);
    } else {
        console.error("Das Element mit der ID 'profilePic' wurde nicht gefunden.");
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

function handleProfilePicChange(event) {
    const file = event.target.files[0];

    // Prüfe, ob es eine Bilddatei ist
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);

        // Sende die Bilddatei an das Backend
        uploadImage(file);
    } else {
        alert('Bitte wählen Sie eine Bilddatei aus.');
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

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;



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
