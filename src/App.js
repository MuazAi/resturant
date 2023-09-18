import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HighLight from "./components/HighLight";
import Home from "./Home";
import Testimonial from "./components/Testimonial";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<HighLight />}></Route>
          <Route path="/reservation" element={<Hero />}></Route>
          <Route path="/order" element={<>order</>}></Route>
          <Route path="/login" element={<>Login</>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
