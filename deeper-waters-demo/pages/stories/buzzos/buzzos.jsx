import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/styles/globals.css'
import './styles.css'

import SiteHeader from "../../../src/components/Header.jsx";
import SiteFooter from "../../../src/components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <header className="hero">
        <SiteHeader />
        <img src="https://picsum.photos/2000/400" className="bannerImg"></img>
      </header>
      <main>
        <div id="titleBarDiv">
          <h1>This is a Title</h1>
          <button id="archiveButton">Archive</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt consectetur voluptatem nostrum veniam, repellendus explicabo et voluptatibus alias cupiditate molestiae rerum, expedita molestias totam odio doloribus perspiciatis facilis vitae!</p>
        <hr></hr>
        
        <div className="backgroundImage">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque aperiam recusandae facere dolore, dicta nobis nihil error facilis tempore rem. Consectetur atque esse fuga ipsa dicta temporibus nesciunt et.</p>
        </div>
        <div ></div>        
      </main>
      <SiteFooter />
    </div>
  </StrictMode>,
)

