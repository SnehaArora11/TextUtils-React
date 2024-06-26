import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [alert, setAlert] = useState({ msg: 'Just using this dismissing alert to welcome you ;)', type: 'Success' });

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        // Call showAlert from here
        showAlert(`Switched to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`, 'Success');
    };

    return (
      <>
        <Router>
            <Navbar title='TextUtils' isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Alert alert={alert} />
            <div className="container my-3">
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<TextForm heading='Enter your text below to analyse' />} />
            </Routes> 
            </div>
        </Router>
      </>
    );
}

export default App;
