document.addEventListener('DOMContentLoaded', function (){
    // Profilbild-Änderung Event-Listener
    let profilePicInput = document.getElementById('profilePic');
    if (profilePicInput) {
        profilePicInput.addEventListener('change', handleProfilePicChange);
    } else {
        console.error("Das Element mit der ID 'profilePic' wurde nicht gefunden.");
    }
})


async function login(event) {
    event.preventDefault();
    console.log("test");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //const ip = getIPAddressFromFile();
    //console.log(ip);

    try {
        const response = await fetch("http://192.168.120.27:42069/login/" + email + ";" + password, {});
        console.log(response)
        if (response.ok) {
            const data = await response.text();
            document.cookie = "loginToken=" + data + "; path=/; secure";
            alert("Login erfolgreich!");
        } else {
            alert("Login fehlgeschlagen: " + response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        alert("Ein Fehler ist aufgetreten: " + error.message);
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

/*function getIPAddressFromFile() {
    try {
        // Read the file content
        const json = fs.readFileSync("important/ip.json", 'utf8');

        // Parse the JSON string into an object
        const data = JSON.parse(json);

        // Check if the ip_address property exists
        if (data.ip_address) {
            return data.ip_address;
        } else {
            throw new Error("IP address not found in the JSON data");
        }
    } catch (error) {
        console.error("Error reading file, parsing JSON or extracting IP address:", error);
        return null;
    }
}*/