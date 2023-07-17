import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
 const [colorBg, setChangeColor] = useState("light");
 const handleColorBackground=(event)=>{
    // setChangeColor(event.target.value);
    // props.changeColor(colorBg);
 }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary " type="submit">Search</button>
        </form> */}
        <button className="btn btn-primary rounded-circle mx-3" type="submit" value="primary" onClick={handleColorBackground}></button>
        <button className="btn btn-secondary rounded-circle mx-2 " type="submit" value="secondary" onClick={handleColorBackground}></button>
        <button className="btn btn-success rounded-circle mx-2" type="submit" value="success" onClick={handleColorBackground}></button>
        <button className="btn btn-danger rounded-circle mx-2" type="submit" value="danger" onClick={handleColorBackground}></button>
        <div className={`form-check form-switch text-${(props.mode==="light")?"dark":"light"} mx-3`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}



//to set the data  type of the props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,               //is Required is used to put required cond. it works when default props are not used.
    aboutText :PropTypes.string 
}

//to set default values in Navbar
Navbar.defaultProps={
    title:"Set title here",
    aboutText:"About text here"
}