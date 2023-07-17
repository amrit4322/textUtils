
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark mode has been disabled" , "success");
     // document.title="TextUtils - Light Mode";  //to change the title in metaicon
    }else{
      setMode("dark");
      
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled" , "success");
      // document.title="TextUtils - Dark Mode";    //to change the title in metaicon
    }
  }
  //checking
  const changeBackground=(color)=>{
    setMode(color);
    
  }
  return (
    <>
      <Router>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} changeColor = {changeBackground}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
  
      
        <Routes>
          <Route exact path="/about" element={ <About />}>
           
          </Route>
          <Route exact path="/home" element={<TextForm showAlert = {showAlert} heading="Enter the Text to analyze below" mode={mode}/>}>
             
          </Route>
        </Routes>
     
      
      </div>
      </Router>
    </>
  );
}

export default App;
