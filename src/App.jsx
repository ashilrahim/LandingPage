// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

import ProjectDetails from "./components/projects/ProjectDetails";
import RootLayout from "./layout/RootLayout";
import ProjectsList from "./components/ProjectList";
import Services from "./components/Services";
import About from "./components/About";
import { Contact } from "lucide-react";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="project/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="works" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
