import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/styles/globals.css'
import './styles.css'

import SiteHeader from "../../../src/components/Header.jsx";
import SiteFooter from "../../../src/components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <header className="hero">
        <SiteHeader />
        <img src="https://picsum.photos/2000/400" className="bannerImg"></img>
      </header>
      <main>
        <div id="titleBarDiv" className="centered">
          <h1>This is a Title</h1>
          <button id="archiveButton">Archive</button>
        </div>
        <div className="centered">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt consectetur voluptatem nostrum veniam, repellendus explicabo et voluptatibus alias cupiditate molestiae rerum, expedita molestias totam odio doloribus perspiciatis facilis vitae!</p>
        </div>
        <hr></hr>
        <div className="backgroundImage">
          <div className="inImageText">
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit id fuga assumenda molestias fugiat autem laborum quos pariatur sint facilis cumque facilis sunt soluta libero quidem blanditiis molestias autem in occaecat officia aut culpa laboris id ea sunt exercitation non ducimus laborum culpa est placeat voluptas cupidatat praesentium ipsum amet consequatur eligendi dolor excepteur est officia eu nam dolores soluta dolor exercitation ea in imperdiet et quibusdam pariatur vel cillum quos ut illum quo quidem in voluptas cupiditate nulla dolorem ea dolore proident quod amet sunt vel excepteur est animi cupiditate lorem illum nostrud distinctio ut ea et non et amet non consequatur fugiat sunt fugiat duis dolore sit at dolorum sit autem et proident omnis consequat adipiscing ducimus ex dignissimos harum consequat facere omnis placeat qui nobis consequat eligendi sed officia amet fugiat in occaecat et facere blanditiis ut sint atque distinctio velit voluptatum ex est ipsum repellendus imperdiet et</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  </StrictMode>,
)

