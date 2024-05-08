import { createRoot } from 'react-dom/client';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";


let container = document.getElementById('header');
let root = createRoot(container);
root.render(<Header/>);

container = document.getElementById('footer');
root = createRoot(container);
root.render(<Footer/>);