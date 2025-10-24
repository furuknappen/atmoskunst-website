import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } 



from "react-router";
import './styles/global.css'
import './styles/variables.css'
import Home from './pages/Home.jsx'
import Designers from './pages/Designers.jsx'
import Layout from './layouts/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/designers" element={<Designers />} />
          </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
