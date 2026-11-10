import { useState } from 'react'
import "../../styles/headers-footers.css"

function SiteHeader(){
    // 1. Manage the search query state
    const [query, setQuery] = useState('');

    // 2. The event handler for input changes
    const handleInputChange = (event) => {
        // Capture the current value typed into the input field
        setQuery(event.target.value);
    };

    // 3. Optional: Handing the form submission (e.g., when user presses Enter)
    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevents the browser from reloading the page
        alert(`Searching for: ${query}`);
    };

    return(
        <>
            {/* NAVIGATION: Links to sections elsewhere on this page. */}
            <nav className="navbar">
            {/* Clicking the site name returns to the top of the page. */}
                <a className="brand" href="../../index.html">
                    DEEPER WATERS
                </a>
            {/* These links jump to the Hall of Fame and thank-you sections. */}
                <div className="nav-links">
                    <a href="../../index.html">Map</a>
                    <a href="../../pages/story-search/story-search.html">Stories</a>
                    <a href="../../pages/hall-of-fame/hall-of-fame.html">Hall of Fame</a>
                    <form onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            className="siteSearch" 
                            value={query}                 // Binds the input value to React state
                            onChange={handleInputChange}   // Triggers handler on every keystroke
                            placeholder="Search Site Content" 
                            aria-label="Search site content"
                            required
                            autoComplete="on">
                        </input>
                    </form>
                    {/* <a href="#gratitude">Our Gratitude</a> */}
                </div>
            </nav>
        </>
    )
}

export default SiteHeader


