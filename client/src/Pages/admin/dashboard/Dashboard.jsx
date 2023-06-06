import React from 'react'
import {  Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
       <h1 className="text-center-top main">Admin Dashboard</h1>
      <div className="custom-card">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card flex-fill">
                <div className="card-body text-center">
                  <h5 className="card-title">Service List</h5>
                  <p className="card-text">View and manage the list of services.</p>
                  <Link to="/Services" className="btn btn-primary">Service List</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card flex-fill">
                <div className="card-body text-center">
                  <h5 className="card-title">Customer List</h5>
                  <p className="card-text">View and manage the list of customers.</p>
                  <Link to="/Customers" className="btn btn-primary">Customer List</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card flex-fill">
                <div className="card-body text-center">
                  <h5 className="card-title">Mechanic List</h5>
                  <p className="card-text">View and manage the list of mechanics.</p>
                  <Link to="/Mechanics" className="btn btn-primary">Mechanic List</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card flex-fill">
                <div className="card-body text-center">
                  <h5 className="card-title">Request List</h5>
                  <p className="card-text">View and manage the list of service requests.</p>
                  <Link to="/requestedservices" className="btn btn-primary">Request List</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
