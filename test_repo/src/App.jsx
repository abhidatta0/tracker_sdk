import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"

const App = () => {
  return (
    <Routes>
     <Route path="login" Component={Login} />
    </Routes>
  )
}
export default App