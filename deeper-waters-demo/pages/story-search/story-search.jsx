import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import SiteFooter from '../../src/components/Footer.jsx'
import SiteHeader from '../../src/components/Header.jsx'
import './style.css'

const storyList = []

// Registers custom story objects into storyList using 16:9 picsum placeholder images
function registerStory(name, hook, breif) {
  const id = storyList.length + 1 // makes it so that the images look dif
  storyList.push({
    id: id,
    name,
    hook,
    breif,
    // 16:9 resolution dimensions
    image: `https://picsum.photos/seed/${id}/800/450`,
    featuredImage: `https://picsum.photos/seed/${id}/1200/675`, // bigger image for cover art
    altText: `Cover image for ${name}`
  })
}

// Sample stories added via registerStory
registerStory(
  "Joshua, Emperor Frog", 
  "The Legend of the Frog", 
  "Many years ago, a young lad by the name of ‘Red’ McCarthy was walking alongside the Erie Canal when he happened upon a tadpole swimming in the water. Curious, Red scooped up the tadpole, gave him the name Joshua, and carried him back to his home in Rome. Under Red’s care Joshua grew into a healthy bull frog, but one night he decided to return to the wetlands where he belonged. ",
)
registerStory(
  "Mount Hope Cemetery", 
  "The first municipal victorian cemetery in the United States", 
  "Mount Hope Cemetery, founded in 1838, is the first municipal victorian cemetery in the United States, using the cemetery of Mt. Auburn in Boston as a prototype, Mount Hope was designed not as a crowded churchyard, but as a park-like landscape meant to be used by the people of Rochester as a communal space to gather. Two notable figures buried here are Susan B. Anthony who played a pivotal role in women's suffrage, and Frederick Douglass who was the most important leader of the abolitionist movement in the 19th century. The number of people who permanently reside here is more than 350,000.",
)
registerStory(
  "Mount Hope Cemetery", 
  "The first municipal victorian cemetery in the United States", 
  "Mount Hope Cemetery, founded in 1838, is the first municipal victorian cemetery in the United States, using the cemetery of Mt. Auburn in Boston as a prototype, Mount Hope was designed not as a crowded churchyard, but as a park-like landscape meant to be used by the people of Rochester as a communal space to gather. Two notable figures buried here are Susan B. Anthony who played a pivotal role in women's suffrage, and Frederick Douglass who was the most important leader of the abolitionist movement in the 19th century. The number of people who permanently reside here is more than 350,000.",
)
registerStory(
  "Joshua, Emperor Frog", 
  "The Legend of the Frog", 
  "Many years ago, a young lad by the name of ‘Red’ McCarthy was walking alongside the Erie Canal when he happened upon a tadpole swimming in the water. Curious, Red scooped up the tadpole, gave him the name Joshua, and carried him back to his home in Rome. Under Red’s care Joshua grew into a healthy bull frog, but one night he decided to return to the wetlands where he belonged. ",
)


function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStoryList = storyList.filter((story) =>
    story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.breif.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <SiteHeader />
      <main className="container">
        <h1 id="title">Story Search</h1>
        
        <div id="top-elements">
          {/* featured section hides when user searches */}
          {!searchQuery.trim() && storyList.length > 0 && (
            <Featured story={storyList[0]} />
          )}

        </div>

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
        placeholder="TYPE HERE..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  )
}

function Featured({ story }) {
  return (
    <section id="featured">
      {/* <h2 className="featured-label">Featured</h2> */}
      <div id="featured-content" className="featured-card">
        <img 
          src={story.featuredImage} 
          alt={story.altText} 
          className="featured-cover-image"
        />
        <div className="featured-overlay">
          <span className="featured-hook">{story.hook}</span>
          <h3 className="featured-title">{story.name}</h3>
        </div>
      </div>
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
          <a href={`#/story/${story.id}`} className="story-image-link">
            <img 
              src={story.image} 
              alt={story.altText} 
              className="story-cover-image"
            />
          </a>
          <h3 className="story-title">
            <a href={`#/story/${story.id}`}>{story.name}</a>
          </h3>
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