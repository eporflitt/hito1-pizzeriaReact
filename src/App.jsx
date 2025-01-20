import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";



const App = () => {
  const [view, setView] = useState("home"); 

  return (
    <div>
      <Navbar setView={setView} /> {/* Pasamos setView al Navbar */}
      {view === "home" && <Home />}
      {view === "login" && <Login />}
      {view === "register" && <Register />}
      <Footer />
    </div>
  );
};

export default App;

