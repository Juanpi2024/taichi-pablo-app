
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("Iniciando montaje de React...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Error: No se encontró el elemento #root");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Aplicación renderizada con éxito");
} catch (error) {
  console.error("Error crítico durante el renderizado:", error);
}
