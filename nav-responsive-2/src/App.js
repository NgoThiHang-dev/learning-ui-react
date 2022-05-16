import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { SignUp } from './pages/signup/SignUp';
import { Product } from './pages/product/Product';
import { Contact } from './pages/contact/Contact';
import { Navbar } from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
