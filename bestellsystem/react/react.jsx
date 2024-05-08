import { createRoot } from 'react-dom/client';
import Header from "./components/Header.jsx";


const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<Header />);