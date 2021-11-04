import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color:props.mode==='light'?'black':'white'}} >{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-a active">
                <a className="nav-a active" style={{textDecoration:'none',color:props.mode==='light'?'black':'white'}} aria-current="page" href="/">Home</a>
              </li>
          
              </ul>
           
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
            <input className="form-check-input mx-2" type="checkbox" onClick={props.togglemode} value="" id="defaultCheck1" />
             <label className="form-check-label  " htmlFor="defaultCheck1">
    Dark mode 
  </label>
</div>
          <div className={`form-check form-switch text-${props.mode==='light'?'danger':'light'}`} >
            <input className="form-check-input mx-2" type="checkbox" onClick={props.redmode} value="" id="defaultCheck2" />
             <label className="form-check-label  " htmlFor="defaultCheck1">
   RED mode 
  </label>
</div>
          </div>
        </div>
        </nav>
    )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"react js"
    }