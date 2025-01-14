import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import History from "./components/History";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <History />
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}

export default App;
