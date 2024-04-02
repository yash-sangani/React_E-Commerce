import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import Product from "./components/pages/Products/Product";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/products" Component={Product} />

        <Route path="/sign-up" Component={SignUp} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
