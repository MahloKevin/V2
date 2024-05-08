import { createRoot } from 'react-dom/client';
import Header from "./components/Header.jsx";


const domNode = document.getElementById('header');
const root = createRoot(domNode);
root.render(<Header />);