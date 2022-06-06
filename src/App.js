import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Chess from './components/Chess';
import Login from './components/Login';
import Timer from './components/Timer';

import Button from 'react-bootstrap/Button';

//import Test from './TestComp.js';

function App() {
  return (
    <div>
      <Header/>
      <Timer/>
      <div id="content-div">
        <Login/>
        <Chess/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;