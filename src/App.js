
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
  const toggleMode =(cls)=>{
    console.log(cls);
    removeClass();  
    document.body.classList.add("bg-"+cls);
    if(mode==='light'){
      setMode("dark");
      
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled" , "success");
     document.title="TextUtils - Light Mode";  //to change the title in metaicon
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark mode has been disabled" , "success");
     
      document.title="TextUtils - Dark Mode";    //to change the title in metaicon
    }
  }
  //checking
  const removeClass=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  }
 
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
  
      {/* <TextForm showAlert = {showAlert} heading="Enter the Text to analyze below" mode={mode}/> */}
        <Routes>
         
          <Route  path="/home" element={<TextForm showAlert = {showAlert} heading="Enter the Text to analyze below" mode={mode}/>}>
             
          </Route>
          <Route exact path="/about" element={ <About mode={mode}/>}>
           
           </Route>
        </Routes>
     
      
      </div>
      </Router>
    </>
  );
}

export default App;
