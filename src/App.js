import "./App.scss"
import BlogCard from "./components/blog-card/blog-card.component"
import Nav from "./components/nav/nav.component"

function App() {
  return (
    <div className='app'>
      <Nav />
      <BlogCard />
    </div>
  )
}

export default App
