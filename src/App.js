import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import MyButton from './components/functional/MyButton';
import Navbar from './components/functional/Navbar';
import Footer from './components/class/Footer';

// Kalau misal km liat `onClick={() => ...}, bagian `() =>` itu namanya "data binding" 

// function App() { // Ini pakai function biasa, kita juga bisa pakai arrow function
const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "Sosmed";

  const clicked = () => {
    return alert("Tombol dipencet!");
  };

  const paragraph = () => {
    return(
      <div>
        <h3>Mantap Bang!</h3>
        <i>horeee</i>
        <marquee>kelas king!</marquee>
      </div>
    ) 
  };

  // const traceButton = () => {
    // alert("mantap bor!")
    // console.log("Button diclick");
  // }

  // Coba pakai state. State itu apa? Intinya kayak tempat penampungan data yang sifatnya mutable
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
    setNavbarValue("My Contact");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} navValue={getNavbarValue}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>print(f'Halo')</code>
        </p>
        <MyButton clicked={clicked}/>
        <Footer paragraph={paragraph}/>
        <h1>{getNavbarValue}</h1>
        <button onClick={() => changeNavbarValue()}>Button Navigasi</button>
      </header>
    </div>
  );
}

export default App;
