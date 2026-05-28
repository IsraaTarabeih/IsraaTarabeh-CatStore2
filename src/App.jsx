import { Route, Routes } from 'react-router-dom'
import './CSS/App.css'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Cats from './pages/Cats'
import Cart from './pages/Cart'
import NavbarComp from './components/NavbarComp'


function App() {
  
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
    </>
  )
}

export default App