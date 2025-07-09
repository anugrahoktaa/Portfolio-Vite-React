import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext'; // <-- Impor ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* <-- Bungkus App dengan ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
