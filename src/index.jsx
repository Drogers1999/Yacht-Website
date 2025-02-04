import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);