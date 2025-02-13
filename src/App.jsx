import { Route, Routes } from "react-router"
import Root from "./layout/Root/Root"
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Root/>}> 
          <Route index path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
