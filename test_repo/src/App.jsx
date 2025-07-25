import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import ProductList from "./components/ProductList"
import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {
  const [cart, setCart] = useState([]);
  console.log({cart})
  return (
    <Routes>
     <Route path="/" Component={Login} />
     <Route path="productlist" element={<ProductList setCart={setCart}/>} />
     <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />

    </Routes>
  )
}
export default App