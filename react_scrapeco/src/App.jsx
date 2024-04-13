//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Hero from "./components/Hero";
import "./App.css";
import NavList from "./components/NavList";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Footer from "./components/footer";
//import Hero from "./components/Hero";

function App() {
  return (
    <div className="App bg-red-500">
      <div className="bg-teal-300"><NavList /></div>
      <Hero/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;