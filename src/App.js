import './App.css';
import React, { useState } from 'react';// useState hook is always in array form  
import About from './components/About';

import Navbar from './components/Navbar';// import navbar component 
import TextForm from './components/TextForm';// import TextForm component
import Alert from './components/Alert';// import Alert component
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


/*====================== App function is start here ======================*/
function App() { // app component ko render kiya hai.....
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // null initially: that meanes screek pr kuch bhi ni dikhega....

  /* ===========================================================================================================
    ============================================================================================================== */

  /* to show alert ..................... */
  const showAlert = (message, type) => { // this function is used to show alert.....
    setAlert({ // yaha pe hum state change kar rahe hain....
      msg: message, // pehle jo bhi message hoga usko hata dega aur naya message show karega....
      type: type // type se pata lagta hai ki alert success hai ya error.....
    });
    setTimeout(() => { // ye timeout 1.5 seconds tak alert ko show karega aur phir usko hata dega.....
      setAlert(null);
    }, 1500);
  };

  /* =============================================================================================================================================================
  ============================================================================================================================================================================ */

  // ye function dark mode ko toggle karta hai......
  const toggleMode = () => {
    if (mode === 'light') { // jb light mode on hoga toh dark mode ko on karega....... 
      setMode('dark'); // state ko dark mode me change kar diya..... 
      document.body.style.backgroundColor = '#042743'; // background color change kiya......
      showAlert("Dark mode has been enabled", "success"); // alert show kiya.....
      document.title = 'Text Utilities - Dark Mode';


    } else { // jb dark mode on hoga toh light mode ko on karega....... 
      setMode('light'); // state ko light mode me change kar diya..... 
      document.body.style.backgroundColor = 'white'; // background color change kiya......
      showAlert("Light mode has been enabled", "success"); // alert show kiya.....
      document.title = 'Text Utilities - Light Mode';
    }
  };

  /* =============================================================================================================================================================
  ============================================================================================================================================================================ */

  return (
    <>
      {/* this is the way to render jsx in jsx .......  */}
      <Router>  {/* Router component ko render kiya hai.....*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> {/* Navbar component ko render kiya   hai.....*/}
        <Alert alert={alert} /> {/* Alert component ko render kiya hai.....*/}
        <div className="container my-3"> {/* container component ko render kiya hai.....*/}

          {/* route is used to navigate between pages .......  */}
          <Routes> {/* routes is replaced <Swtich></Swtich> in react-router-dom v6*/}
            <Route exact path="/about" element={<About mode={mode} />} /> {/* about component ko render kiya hai.....*/}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} /> {/* TextForm component ko render kiya hai.....*/}
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
