import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
//import Login from "./components/Login";
//import Register from "./components/Register";

import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;