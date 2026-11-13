import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../../styles/globals.css'
import "./App.css";
import SiteHeader from "../../src/components/Header.jsx";
import SiteFooter from "../../src/components/Footer.jsx";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="archive">
            <header>
                <SiteHeader />
                <div>
                    <p>FINGER LAKES • NEW YORK</p>

                    <p>INSERT FOCUS HERE Archive</p>

                </div>
            </header>
            <main>
                <section>
                    <p>Section for links to further reading.</p>
                    <link href="https://en.wikipedia.org/wiki/Finger_Lakes" />
                </section>

                <section>
                    <img src="pole.jpg" 
                    alt="The liberty pole mentioned in class."
                    />
                </section>
            </main>
            <SiteFooter />
        </div>
    </StrictMode>
)