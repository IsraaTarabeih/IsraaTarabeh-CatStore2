import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Cats from './pages/Cats'
import Cart from './pages/Cart'
import NavbarComp from './components/NavbarComp'
import CatInfo from './pages/CatInfo'


function App() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComp />

      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cats/:id" element={<CatInfo />} />
      </Routes> 
      </main>

      <footer className="text-center py-3 bg-black text-white">
      © 2026 CatStore. All rights reserved.
      </footer>
    </div>
  )
}

export default App