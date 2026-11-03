
import { useState } from "react";
import "./App.css";

// Each class is stored as an object inside this array.
// Future classes can be added by copying the existing object
// and changing the year, title, description, members, and projects.
const classes = [
  {
    // The year identifies this class and is used as its unique key.
    year: " Fall 2026",

    // The name displayed on the class card.
    title: "Founding Class",

    // A short introduction displayed before the class details expand.
    description:
      "The students who began Deeper Waters and established the foundation for future classes.",

    // Names of the students who belong to this class.
    // Add or remove names here as the class list changes.
    members: [
      "Sarah Beiter",
      "Kyle Benjamin",
      "Riley Consavage",
      "Noah Gallo",
      "Tyler Gardner",
      "Ashton Griffiths",
      "Guilherme Honorato",
      "Emily Hunstein",
      "Zach Lindquist",
      "Joshua Mitchell",
      "Rain O'Donnell",
      "Cedric Pierre-Louis",
      "Suroor Radi",
      "Jonathan Ragan",
      "Orchard Rosenstein",
      "Gabriel Thompson",
      "Jack Tombs",
      "Caleb Walsh",
      "Robert Welton",
    ],

    // Stories, projects, and other contributions made by this class.
    // Each string becomes a separate item in the Contributions list.
    projects: [
      "Website design and development",
      "Research into the history around the Finger Lakes",
      "Building a foundation for future classes",
      "The Mysterious Mushroom House: Investigating its origins, who built it, why it was built, and the town's beliefs about the abandoned house.",
      "Buzzo's Instrument Store: Exploring a locally famous business.",
      "Joshua and the Empeyville Frog.",
      "Mount Hope Cemetery: Exploring its history and stories.",
      "Perry Ground and Haudenosaunee Folklore.",
      "The DeLand Mansion: What Really Happened Behind Those Walls?",
      "Zach Ennis and the Rochester Deaf Kitchen.",
      "Glenn Curtiss: Exploring his story and legacy.",
    ],
  },
];

// App is the main React component that builds the entire page.
function App() {
  // Tracks which class's details are currently open.
  // null means no class is expanded.
  const [expandedYear, setExpandedYear] = useState(null);

  // Opens the selected class's details.
  // If that class is already open, clicking it closes the details.
  function toggleClass(year) {
    setExpandedYear(expandedYear === year ? null : year);
  }

  // Everything returned here describes what appears on the webpage.
  return (
    <div className="app">
      {/* HERO: The top section containing the navigation and main heading. */}
      <header className="hero">
        {/* NAVIGATION: Links to sections elsewhere on this page. */}
        <nav className="navbar">
          {/* Clicking the site name returns to the top of the page. */}
          <a className="brand" href="#home">
            DEEPER WATERS
          </a>

          {/* These links jump to the Hall of Fame and thank-you sections. */}
          <div className="nav-links">
            <a href="#hall-of-fame">Hall of Fame</a>
            <a href="#gratitude">Our Gratitude</a>
          </div>
        </nav>

        {/* HERO CONTENT: Main title, introduction, and navigation button. */}
        <div className="hero-content" id="home">
          <p className="eyebrow">FINGER LAKES • NEW YORK</p>

          <h1>
            Every Class
            <br />
            Leaves a Legacy.
          </h1>

          <p className="hero-description">
            Celebrating the students, ideas, and contributions
            that bring Deeper Waters to life, one class at a time.
          </p>

          {/* This button scrolls down to the Hall of Fame section. */}
          <a className="hero-button" href="#hall-of-fame">
            Explore the Hall of Fame <span>↓</span>
          </a>
        </div>

        {/* Decorative labels along the bottom of the hero section. */}
        <div className="hero-bottom">
          <span>OUR HISTORY</span>
          <span>OUR STORIES</span>
          <span>OUR FUTURE</span>
        </div>
      </header>

      <main>
        {/* INTRODUCTION: Explains the purpose of the Hall of Fame.
            The id allows navigation links to jump to this section. */}
        <section className="introduction" id="hall-of-fame">
          <p className="eyebrow">A GROWING LEGACY</p>

          <h2>Hall of Fame</h2>

          <p>
            Deeper Waters is built by the students who contribute
            their time, creativity, and ideas to tell the stories
            around the Finger Lakes. This is a place to recognize each
            class and preserve the work they leave behind.
          </p>
        </section>

        {/* CLASSES SECTION: Displays the available class cards. */}
        <section className="classes-section">
          {/* Heading and subtitle above the class cards. */}
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PEOPLE BEHIND THE PROJECT</p>
              <h2>Our Classes</h2>
            </div>

            <p className="section-note">
              One project. Many generations.
            </p>
          </div>

          <div className="class-list">
            {/* Loop through the classes array to create one card per class.
                Adding another object to the array automatically creates
                another card without needing to duplicate this JSX. */}
            {classes.map((group) => (
              // Each card uses its class year as a unique React key.
              <article className="class-card" key={group.year}>
                {/* CLASS PHOTO AREA:
                    Currently displays the year and a caption.
                    A future class can replace this with an actual photo. */}
                <div className="class-photo">
                  <span className="photo-year">{group.year}</span>
                  <span className="photo-caption">
                    THE BEGINNING OF A LEGACY
                  </span>
                </div>

                {/* CLASS INFORMATION: Title and short description. */}
                <div className="class-content">
                  <p className="class-year">
                    CLASS OF {group.year}
                  </p>

                  <h3>{group.title}</h3>

                  <p className="class-description">
                    {group.description}
                  </p>

                  {/* EXPAND BUTTON:
                      Clicking this button shows or hides the class details.
                      aria-expanded communicates the current state to
                      assistive technologies. */}
                  <button
                    className="expand-button"
                    onClick={() => toggleClass(group.year)}
                    aria-expanded={expandedYear === group.year}
                  >
                    {expandedYear === group.year
                      ? "Close Class Details"
                      : "Explore Class Details"}
                    <span>
                      {expandedYear === group.year ? "−" : "+"}
                    </span>
                  </button>

                  {/* Only display these details when this class is open. */}
                  {expandedYear === group.year && (
                    <div className="class-details">
                      {/* CLASS MEMBERS:
                          Generate a list automatically from the members array. */}
                      <div>
                        <h4>Class Members</h4>
                        <ul>
                          {group.members.map((member, index) => (
                            // The name and index identify each list item.
                            <li key={`${member}-${index}`}>
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CONTRIBUTIONS:
                          Generate a list automatically from the projects array. */}
                      <div>
                        <h4>Contributions</h4>
                        <ul>
                          {group.projects.map((project) => (
                            // Each project description is used as its key.
                            <li key={project}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Closing message beneath the class cards. */}
          <p className="future-note">
            Every new class adds another chapter to the story.
          </p>
        </section>

        {/* THANK-YOU SECTION:
            Recognizes Professor Dooley and his ongoing role in guiding
            Deeper Waters and the classes that will follow. */}
        <section className="thank-you" id="gratitude">
          <p className="eyebrow">A LASTING LEGACY</p>

          <h2>With Gratitude</h2>

          {/* Decorative divider styled in App.css. */}
          <div className="thank-you-divider" />

          <h3>To Professor Dooley</h3>

          <p>
            Deeper Waters is more than the work of a single class.
            It is a project that will continue to grow, evolve, and
            tell the stories of the Finger Lakes through generations
            of students.
          </p>

          <p>
            Thank you for your guidance, encouragement, and dedication throughout our work on this project.
            Your support has helped us develop our ideas, explore new perspectives, and contribute something meaningful to Deeper Waters. 
            We appreciate the time and effort you have put into helping our class bring this project to life.
          </p>

          {/* This closing message can be updated by future classes. */}
          <p className="thank-you-signature">
            In appreciation, from the class of Fall 2026.
          </p>
        </section>
      </main>

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
    </div>
  );
}

// Makes App available to the rest of the React application.
export default App;
