import "./App.scss"
import Nav from "./components/nav/nav.component"
import { HomePage } from "./components/pages/homepage/homepage.component"

function App() {
  return (
    <div className='app'>
      <Nav />
      <div id='page-content'>
        <HomePage/>
      </div>
    </div>
  )
}

export default App
