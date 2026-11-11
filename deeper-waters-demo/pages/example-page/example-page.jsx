// standard imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SiteFooter from '../../src/components/Footer.jsx'
import SiteHeader from '../../src/components/Header.jsx'
import '/styles/globals.css'
import './style.css'
// this is where thhe bulk of the webpage is built
function App() {
    // here you could run react functions like useState() and other js features
    // inside the return is the html code which the page uses and is sent to clients
    return (
    <>
      <SiteHeader />
      <main className="container">
        <h1 id="title">Deeper Waters</h1>
        {/*where the main content of the page should go*/}
        <p>Example page yo!</p>
      </main>
      <SiteFooter />
    </>
  )
}
// this creates the root of the actual webpage via node/react requirements
// you don't have to mess with this that much
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)