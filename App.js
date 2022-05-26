import  { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import LeftRight from './components/LeftRight';
import View from './components/View';
import Contact from './components/Contact';
import Users from './components/Users';
import P1 from './components/P1';
import P2 from './components/P2';

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00ff00';
      showAlert("Dark Mode has been Enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }
  return (
  <>
   <Router>
   <Navbar title= "demo1" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className= "container">

   <Routes>
          <Route path="/home" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />  
          <Route path="/lr" element={<LeftRight/>} /> 
          <Route path="/view" element={<View/>} /> 
          <Route path="/users" element={<Users/>} />
          <Route path="/p1" element={<P1/>} />
          <Route path="/p2" element={<P2/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Home />} />
   </Routes>
   {/* <Home showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
   </div>
   </Router>
  </>

  );
}

export default App;
