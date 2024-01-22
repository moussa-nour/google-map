import logo from './logo.svg';
import './App.css';
import Map from './Map'
import Navbarr from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Navbarr/>
    <h1 >Welcome to our shop</h1>

    <Map/>
    
    </div>
  );
}

export default App;
