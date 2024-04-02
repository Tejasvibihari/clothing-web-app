import Header from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
