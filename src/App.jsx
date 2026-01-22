import Header from "./components/header.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

const favMovies = [
  'Interstellar',
  'No Country for Old Men',
  'Hateful Eight'
]

const favBooks = [
  '1984',
  'Maze Runner',
  'Hunger Games'
]

const hobbies = [
  'Gaming',
  'Coding',
  'Magic: The Gathering'
]

const App = () =>{

  return (
    <>
      <div id="wrapper">
      <Header name = "Maxx Hilstad" tagLine = "Aspiring Full-Stack Developer">
        <Nav />
      </Header>
      <main>
        <section>
          <h2>About Maxx</h2>
          <p>Maxx Hilstad is an aspiring full-stack web developer. He is working on his Associate Degree for Web Development & Design. He enjoys gaming,
            playing guitar, and of course, programming.
          </p>
        </section>
        <section>
          <h2>Favorite Movies</h2>
          <ul>
            {favMovies.map((movie, index) => <li key = { index }>{ movie }</li>)}
          </ul>
          <h2>Favorite Books</h2>
          <ul>
            {favBooks.map((book, index) => <li key = { index }>{ book }</li>)}
          </ul>
          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => <li key = { index }>{ hobby }</li>)}
          </ul>
        </section>
      </main>
      <Footer />
      </div>
    </>
  )
  
}

export default App
