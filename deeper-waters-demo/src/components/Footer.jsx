import "../../styles/headers-footers.css"

function SiteFooter(){
    return(
        <>
            {/* FOOTER: Appears at the bottom of the webpage. */}
            <footer className="footer">
                {/* Clicking the site name returns to the top. */}
                <a className="footer-brand" href="#home">
                    DEEPER WATERS
                </a>

                <p>
                    Preserving the stories of the Finger Lakes, one generation
                    at a time.
                </p>

                {/* Small project identification at the bottom of the page. */}
                <span className="footer-bottom">
                    A COLLABORATIVE PROJECT • FINGER LAKES, NEW YORK
                </span>
            </footer>
        </>
    )
}

export default SiteFooter;