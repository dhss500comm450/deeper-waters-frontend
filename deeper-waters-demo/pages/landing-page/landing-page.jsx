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
    <div className="home-page">
      <SiteHeader />
        <main className="home-main" id="main-content">
          <section className="arcgis-map" id="explore" aria-labelledby="map-heading">
          <div className="home-map-title">
            <p className="home-label">EXPLORE THE REGION</p>
            <h1 id="map-heading">Feild<br />Notes</h1>
            <p>STORIES FROM THE FINGER LAKES</p>
          </div>
            <arcgis-embedded-map item-id="44193eae185048d5977fb42af74150c8" theme="light" time-zone-label-enabled center="-76.90117079757196,42.75457097351648" scale="1155581.108577" portal-url="https://ritarcgis.maps.arcgis.com"></arcgis-embedded-map>
          <article className="home-map-card">
            <div className="home-map-card-label"><span aria-hidden="true">01</span><p className="home-label">LOREM IPSUM<br /><span>Finger Lakes, New York</span></p></div>
            <div className="home-map-card-footer"><span>DOLOR SIT AMET</span></div>
          </article>
          </section>
          <div className="home-overview">
            <section id="about" aria-labelledby="about-heading">
              <p className="home-label">THE PROJECT</p>
              <h2 id="about-heading">About Us</h2>
              <p>Feild Notes is a student-run collaborative project at the Rochester Institute of Technology dedicated to showcasing stories related to the Finger Lakes and the area around them. The project uses a variety of mediums such as websites, sound, and videos to create a unique, immersive experience.</p>
              <a className="home-text-link" href={storiesUrl}>Find a story</a>
            </section>
            <section aria-labelledby="hall-heading">
              <h2 id="hall-heading"><a href={hallUrl}>Hall of Fame</a></h2>
              <a className="home-hall-card" href={hallUrl}>
                <span className="home-label">To honor the classes and the hardwork put into this project by all the previous and current classes.</span>
                <span className="home-hall-title">SEE THE CREATORS<br />OF THIS PROJECT</span>
              </a>
            </section>
          </div>
          <section className="home-contact" id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Get in touch</h2>
            <div className="home-contact-panel"><p>If you have any questions, comments, or concerns, please do not hesitate to contact us at XXX</p>
          </div>
          </section>
        </main>
      <SiteFooter />
    </div>
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
