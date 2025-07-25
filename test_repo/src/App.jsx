import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import ProductList from "./components/ProductList"
import { useState } from "react"

const App = () => {
  const [cart, setCart] = useState([]);
  console.log({cart})
  return (
    <Routes>
     <Route path="/" Component={Login} />
     <Route path="productlist" element={<ProductList setCart={setCart}/>} />
    </Routes>
  )
}
export default App