import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../styles/globals.css'

import SiteHeader from "../../../src/components/Header.jsx";
import SiteFooter from "../../../src/components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app">
      <header className="hero"><SiteHeader /></header>
        <img src="https://picsum.photos/2000/400" className="bannerImg"></img>
        <h1>This is a Title</h1>
      <SiteFooter />
    </div>
  </StrictMode>,
)

