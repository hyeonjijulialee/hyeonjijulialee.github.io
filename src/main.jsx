import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Publications from './pages/Publications.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Leadership from './pages/Leadership.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<About />} />
                    <Route path="publications" element={<Publications />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="leadership" element={<Leadership />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
