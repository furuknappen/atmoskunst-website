import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './styles/global.css'
import './styles/variables.css'
import Home from './pages/Home.jsx'
import Designers from './pages/Designers.jsx'
import Lab from './pages/Lab.jsx'
import Layout from './layouts/Layout.jsx'

function App() {
  useEffect(() => {
    // Handle redirect from 404.html
    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      window.history.replaceState(null, null, redirect);
    }
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/lab" element={<Lab />} />
      </Route>
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
