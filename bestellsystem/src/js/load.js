//AKtuelles Jahr für Copyright einfügen
getYear();

//Fügt Google Maps auf der Startseite ein
myMap()


// Aktuelles Jahr bekommen
function getYear() {
    let displayYearElement = document.querySelector("#displayYear");

    if (displayYearElement) {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        displayYearElement.innerHTML = currentYear;
    } else {
        console.error("Das Feld mit der ID 'displayYear' konnte nicht gefunden werden");
    }
}


// Google Maps einfügen
function myMap() {
    let googleMapElement = document.getElementById("googleMap");

    if (googleMapElement) {
        let mapProp = {
            center: new google.maps.LatLng(48.90302550090018, 11.929094617806973),
            zoom: 18,
        };
        let map = new google.maps.Map(googleMapElement, mapProp);

        // Erstellen eines Markers und Setzen auf die Karte
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(48.90302550090018, 11.929094617806973),
            map: map,
            title: 'Mahlo GmbH & Co. KG'
        });
    } else {
        console.error("Das Element mit der ID 'googleMap' konnte nicht gefunden werden.");
    }
}


