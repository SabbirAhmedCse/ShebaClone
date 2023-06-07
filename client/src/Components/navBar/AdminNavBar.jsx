import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthAccess from '../../DataAccess/AuthAccess'
import Button from '../button/Button';

const AdminNavBar = () => {
  const navigate = useNavigate()
  const logoutHandle = async () =>{
    AuthAccess.signout();
    navigate('/signin');

  }
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to='dashboard'>DashBoard </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to='requestedservices'>Requested Services </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='Services'>Services</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='Customers'>Customers</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='Mechanics'>Mechanics</Link>
              </li>
              
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Button className="btn btn-outline-dark my-2 my-sm-0" name={'Logout'} method={logoutHandle}/>
            </form>
          </div>
        </nav>
    </div>
  )
}

export default AdminNavBar