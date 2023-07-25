import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './pages/Home'
import Joke from './pages/Joke'
import About from './pages/About'
function App() {

  return (
    <div className="App bg-success h-100">
      <h1 className='text-center font-weight-bold bg-dark text-white p-3'>Bearly Polite</h1>
      <Nav />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke/:userid" element={<Joke />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
// hello