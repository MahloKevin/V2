import { createRoot } from 'react-dom/client';
import Header from "./components/header.jsx";
import Cards from "./components/cards.jsx";
import Footer from "./components/footer.jsx";

function loadCards() {
    let cardContainer = document.getElementById('cards');
    if (cardContainer) {
        let cardRoot = createRoot(cardContainer);
        cardRoot.render(<Cards/>);
    } else {
        console.error("Das Element mit der ID 'cards' wurde nicht gefunden.");
    }
}

function loadStandard() {
    let headerContainer = document.getElementById('header');
    if (headerContainer) {
        let headerRoot = createRoot(headerContainer);
        headerRoot.render(<Header/>);
    } else {
        console.error("Das Element mit der ID 'header' wurde nicht gefunden.");
    }

    let footerContainer = document.getElementById('footer');
    if (footerContainer) {
        let footerRoot = createRoot(footerContainer);
        footerRoot.render(<Footer/>);
    } else {
        console.error("Das Element mit der ID 'footer' wurde nicht gefunden.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards(); // Zuerst die Karten laden
    loadStandard(); // Danach Header und Footer laden
});
