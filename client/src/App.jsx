import Header from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import SignIn from "./pages/SignIn";
import AddProduct from "./pages/AddProduct";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}