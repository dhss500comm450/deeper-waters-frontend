import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import SiteFooter from '../../src/components/Footer.jsx'
import SiteHeader from '../../src/components/Header.jsx'

import "/styles/globals.css";
import './style.css'

import storyList from "../../src/data/stories_info.js"

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStoryList = storyList.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.breif.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <SiteHeader />
      <main className="container">
        <h1 id="title">Story Search</h1>
        {/*hides the story search when searching */}
        {(/* {true || !searchQuery.trim() && storyList.length > 0 && ( */
          <Featured story={storyList[0]} />
        )}

        <hr className="divider" />

        <div className="stories-header">
          <h2>Stories</h2>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <StoryGrid stories={filteredStoryList} />
      </main>
      <SiteFooter />
    </>
  )
}

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a story..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <img 
        src="https://picsum.photos/seed/search/25/25" 
        alt="search icon"className="search-icon"
      />
    </div>
  )
}

function Featured({ story }) {
  return (
    <section id="featured">
      {/* <h2 className="featured-label">Featured</h2> */}
      <a href={story.pageRef} className="featured-card">
        <img 
          src={story.featuredImage} 
          alt={story.altText} 
          className="featured-cover-image"
        />
        <div className="featured-overlay">
          <span className="featured-hook">{story.hook}</span>
          <h3 className="featured-title">{story.title}</h3>
        </div>
      </a>
    </section>
  )
}

function StoryGrid({ stories }) {
  if (stories.length === 0) {
    return <p className="no-results">No stories found matching your search.</p>
  }

  return (
    <div id="story-grid">
      {stories.map((story) => (
        <article key={story.id} className="story-card">
          <a href={story.pageRef} className="story-image-link">
            <img 
              src={story.image} 
              alt={story.altText} 
              className="story-cover-image"
            />
          </a>
          <h2 className="story-title">
            <a href={story.pageRef}>{story.title}</a>
          </h2>
          <p className="story-summary">
            {story.breif}
          </p>
        </article>
      ))}
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)