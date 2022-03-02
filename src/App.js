import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode = () => {
    mode==='light'?setMode('dark'):setMode('light')
  }
  return (
    <div className="App">
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode}/>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
