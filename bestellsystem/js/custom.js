//Spielt das aktuelle Jahr als Copyright ein
getYear();

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

// isotope js (aka. Filter System)
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});
