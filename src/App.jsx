import { Route, Routes } from "react-router"
import Root from "./layout/Root/Root"
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"
import Shop from "./pages/Shop/Shop"
import Contact from "./pages/Contact/Contact"
import Registration from "./pages/Registration/Registration"
import Login from "./pages/Login/Login"
import AddDish from "./pages/AddDish/AddDish"
import FoodDetails from "./pages/FoodDetails/FoodDetails"
import Cart from "./pages/Cart/Cart"
import PrivateRoutes from "./routes/PrivateRoutes"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />


          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route path="/menu/:id" element={<PrivateRoutes> <FoodDetails /> </PrivateRoutes>} />
          <Route path="/addDish" element={<AddDish />} />

          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
