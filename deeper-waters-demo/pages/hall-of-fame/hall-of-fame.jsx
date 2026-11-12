import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './hall-of-fame.jsx'

import ClassList from "../../src/components/ClassList.jsx";
import SiteHeader from "../../src/components/Header.jsx";
import SiteFooter from "../../src/components/Footer.jsx";

import '/styles/globals.css'
import "./App.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app">
      <SiteHeader />
      {/* HERO: The top section containing the navigation and main heading. */}
      <header className="hero">

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
        {/* INTRODUCTION: Explains the purpose of the Hall of Fame. */}
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

          {/* ClassList handles displaying all the class cards. */}
          <ClassList />

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
      <SiteFooter />
    </div>
  </StrictMode>,
)

// Makes App available to the rest of the React application.
export default App;
