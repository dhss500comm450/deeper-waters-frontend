import SiteHeader from '../../src/components/Header.jsx'
import SiteFooter from '../../src/components/Footer.jsx'
import mapImage from '../../src/assets/fingerlakes.png'
import './home.css'

const storiesUrl = '/pages/story-search/story-search.html'
const hallUrl = '/pages/hall-of-fame/hall-of-fame.html'
export default function Home() {
  return (
    <div className="home-page" id="home">
      <a className="home-skip" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="home-map" id="explore" aria-labelledby="map-heading">
          <img className="home-map-image" src={mapImage} alt="Map of the Finger Lakes showing lakes and surrounding New York counties." fetchPriority="high" />
          <div className="home-map-topline">
            <a href={storiesUrl}>Explore the collection</a>
          </div>
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
          <div className="home-contact-panel"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><span>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
