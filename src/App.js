import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Workshops from "./components/Workshops";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <About />
        <Workshops />
        <Events />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
