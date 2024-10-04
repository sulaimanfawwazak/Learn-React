import logo from './logo.svg';
import './App.css';
import MyButton from './components/functional/MyButton';
import Navbar from './components/functional/Navbar';
import Footer from './components/class/Footer';

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

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>print(f'Halo')</code>
        </p>
        <MyButton clicked={clicked}/>
        <Footer paragraph={paragraph}/>
      </header>
    </div>
  );
}

export default App;
