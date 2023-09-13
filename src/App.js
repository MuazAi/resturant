import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HighLight from "./HighLight";
import Testimonial from "./Testimonial";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <HighLight />
        <Testimonial />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
