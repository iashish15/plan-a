import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
