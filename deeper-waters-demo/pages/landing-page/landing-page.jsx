// standard imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SiteFooter from '../../src/components/Footer.jsx'
import SiteHeader from '../../src/components/Header.jsx'
import '/styles/globals.css'
import './style.css'
const storiesUrl = '/pages/story-search/story-search.html'
const hallUrl = '/pages/hall-of-fame/hall-of-fame.html'
// this is where thhe bulk of the webpage is built
function App() {
    // here you could run react functions like useState() and other js features
    // inside the return is the html code which the page uses and is sent to clients
    return (
    <>
      <SiteHeader />
        <main id="main-content">
          <section className="arcgis-map" id="explore" aria-labelledby="map-heading">
            <arcgis-embedded-map item-id="44193eae185048d5977fb42af74150c8" theme="light" time-zone-label-enabled center="-76.90117079757196,42.75457097351648" scale="1155581.108577" portal-url="https://ritarcgis.maps.arcgis.com"></arcgis-embedded-map>
          <div className="home-map-title">
            <p className="home-label">EXPLORE THE REGION</p>
            <h1 id="map-heading">Deeper<br />Waters</h1>
            <p>LOREM IPSUM DOLOR SIT AMET.</p>
          </div>
          <article className="home-map-card">
            <div className="home-map-card-label"><span aria-hidden="true">01</span><p className="home-label">LOREM IPSUM<br /><span>Finger Lakes, New York</span></p></div>
            <div className="home-map-card-footer"><span>DOLOR SIT AMET</span></div>
          </article>
          </section>
          <div className="home-overview">
            <section id="about" aria-labelledby="about-heading">
              <p className="home-label">THE PROJECT</p>
              <h2 id="about-heading">About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="home-text-link" href={storiesUrl}>Find a story</a>
            </section>
            <section aria-labelledby="hall-heading">
              <h2 id="hall-heading"><a href={hallUrl}>Hall of Fame</a></h2>
              <a className="home-hall-card" href={hallUrl}>
                <span className="home-label">LOREM IPSUM DOLOR SIT AMET</span>
                <span className="home-hall-title">Lorem ipsum.<br />Dolor sit amet.</span>
                <span className="home-hall-bottom">Meet the classes</span>
              </a>
            </section>
          </div>
          <section className="home-contact" id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Get in touch</h2>
            <div className="home-contact-panel"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><span>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
          </section>
        </main>
      <SiteFooter />
    </>
  )
}
export default App
// this creates the root of the actual webpage via node/react requirements
// you don't have to mess with this that much
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
