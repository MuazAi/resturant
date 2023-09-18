import CoustomersSay from "./CustomerSay";
import Specials from "./Specials";
import About from "./components/About";
import Hero from "./components/Hero";
import HighLight from "./components/HighLight";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <CoustomersSay />
      <About />
    </>
  );
}
