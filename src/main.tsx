import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/themeContext.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './context/loadingContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <ThemeProvider>
                <LoadingProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </LoadingProvider>
            </ThemeProvider>
        </NextUIProvider>
    </React.StrictMode>,
);
