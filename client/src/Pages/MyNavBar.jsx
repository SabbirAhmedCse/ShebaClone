import React from 'react'
import { Link } from 'react-router-dom'

const MyNavBar = () => {
  return (
    <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
  <div ClassName="container-fluid">
    <link ClassName="navbar-brand" href="#">Navbar</link>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarNavDropdown">
      <ul ClassName="navbar-nav">
        <li ClassName="nav-item">
          <link ClassName="nav-link active" aria-current="page" href="#">Home</li>
        </li>
        <li ClassName="nav-item">
          <link ClassName="nav-link" href="#">Features</link>
        </li>
        <li ClassName="nav-item">
          <link ClassName="nav-link" href="#">Pricing</li>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   
  )
}

export default MyNavBar