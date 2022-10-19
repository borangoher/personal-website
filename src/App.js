import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Placeholder from "./components/Placeholder";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Placeholder />} />
        <Route path="/contact" element={<Placeholder />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
