import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index';
import { Cart } from './pages/Cart/index'
import { Wishlist } from './pages/Wishlist/index';
import { AuthLogin } from "./pages/AuthLogin/index";
import { AuthSignup } from "./pages/AuthSignup/index";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/auth/signup" element={<AuthSignup />} />
    </Routes>
  )
}

export default App
