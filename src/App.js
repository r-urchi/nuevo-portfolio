import React from 'react';
import './components/css/main.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Sections/>
        <Footer/>
    </div>
  );
}

export default App;