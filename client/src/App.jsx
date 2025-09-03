import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />}  />
        <Route path="*" element={<Error/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
