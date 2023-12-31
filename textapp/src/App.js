import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TeextForm from './component/TeextForm';
import Alert from './component/Alert';
import { useState } from 'react';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
  }
  const toggleDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#000033'
      showAlert("Dark Mode has been Enabled", "success")
      document.title = "TextUtil-Dark Mode"
      setInterval(() => {
        document.title = "TextUtil-Light Mode"
      }, 2000);
      setInterval(() => {
        document.title = "install the app"
      }, 1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
      // setInterval(() => {
      //   document.title="TextUtil-Light Mode"
      //   }, 2000);
    }


  }
  return (
    <>
      /
        <Navbar mode={mode} toggleMode={toggleDark} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route> */}
            {/* <Route path="/"> */}
              <TeextForm heading="Enter Something in textArea" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
