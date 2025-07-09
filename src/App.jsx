import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import AllProductsPage from './Pages/AllProductsPage'
import CartPage from './Pages/CartPage'
import WishlistPage from './Pages/WishlistPage'
// import './index.css'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>} >
  <Route index element={<Home/>} />
  <Route path='/all-products' element={<AllProductsPage/>} />
  <Route path='/cart-page' element={<CartPage/>} />
  <Route path='/wishlist' element={<WishlistPage/>} />
  </Route>
</Routes>
</BrowserRouter>
 {/* <Home/> */}
    </>
  )
}

export default App
