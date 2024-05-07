//Spielt das aktuelle Jahr als Copyright ein
getYear();

//Fügt Google Maps auf der Startseite ein
myMap()


// Aktuelles Jahr bekommen
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

// Google Maps einfügen //
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(48.90302550090018, 11.929094617806973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}