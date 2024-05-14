import { createRoot } from 'react-dom/client';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

loadStandart()

function loadStandart(){
    document.addEventListener('DOMContentLoaded', function () {
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
    });

}
