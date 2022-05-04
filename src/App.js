import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //  dark mode variable
  const [alert, setAlert] = useState(null);  // alert as an object
  const [btnColor, setBtnColor] = useState('#000000'); // change color of buttons

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
    setAlert(null);
  }, 2000);
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#353535';
      showAlert('Dark Mode has been set', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light Mode has been set', 'success');
    }
  }

  const changeColor = (value)=>{
    let inputColor= document.getElementById('colorPicker');
    setBtnColor(inputColor.value);
  }

  return (
    // JSX Code Starts Here
    // JSX Fragment
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert= {alert}/>
      <div className="container mt-3">
        {/* <Routes> */}
          {/* exact -- to match exact path specified*/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" rows={5} mode={mode} btnColor={btnColor}/>
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" rows={5} mode={mode} btnColor={btnColor}/>} /> */}
          {/* <Route exact path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        {/* </Routes> */}
      </div>
     {/* </Router> */}
    </>
    // JSX Code Ends Here
  );
}

export default App;