//Authentifizierung per LDAP
function LDAPauth() {

    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    fetch('http://localhost:42069/ldap/' + user + password)
        .then(response => response.json())
        .then(data => {
            console.log("Test" + data);
            //
            document.cookie = "user: " + data;
        })
        .catch(error => console.log("Fehler beim Abrufen der Daten" + error));
}