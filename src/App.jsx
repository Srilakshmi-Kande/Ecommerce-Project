import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index';
import { Cart } from './pages/Cart/index'
import { Wishlist } from './pages/Wishlist/index';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  )
}

export default App
