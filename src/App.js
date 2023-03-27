import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import NoPage from "./Components/NoPage";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import "aos/dist/aos";

function App() {
  const [pcolors, setPcolors] = useState("home-content-left-paragraph");
  const [pcolors2, setPcolors2] = useState("projects-p");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <NavBar
            pcolors={pcolors}
            setPcolors={setPcolors}
            pcolors2={pcolors2}
            setPcolors2={setPcolors2}
          />
        }
      >
        <Route
          index
          element={<Home pcolors={pcolors} setPcolors={setPcolors} />}
        />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/project"
          element={<Projects pcolors2={pcolors2} setPcolors2={setPcolors2} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
