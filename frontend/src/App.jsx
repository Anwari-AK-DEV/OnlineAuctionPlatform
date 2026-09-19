import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Auctions from "./Auctions";
import Categories from "./Categories";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";

function NotFound() {
  return (
    <main style={{ textAlign: "center", marginTop: "80px", fontFamily: "sans-serif" }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auctions/:id" element={<Auctions />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
