import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// function App() { // Ini pakai function biasa, kita juga bisa pakai arrow function
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>print(f'Halo')</code>
        </p>
        <MyButton/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
