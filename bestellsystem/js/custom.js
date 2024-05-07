//Spielt das aktuelle Jahr als Copyright ein
getYear();

//Fügt Google Maps auf der Startseite ein
myMap()

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


// Aktuelles Jahr bekommen
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(48.90302550090018, 11.929094617806973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}