export default function Dashboard() {
    return (
      <>
      <h1 class="text-center main">Dashboard</h1>
      <div class="custom-card">
      <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6 mb-4">
              <div class="card flex-fill">
                <div class="card-body text-center">
                  <h5 class="card-title">Service List</h5>
                  <p class="card-text">View and manage the list of services.</p>
                  <a href="#" class="btn btn-primary">Service List</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-4">
              <div class="card flex-fill">
                <div class="card-body text-center">
                  <h5 class="card-title">Customer List</h5>
                  <p class="card-text">View and manage the list of customers.</p>
                  <a href="#" class="btn btn-primary">Customer List</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-4">
              <div class="card flex-fill">
                <div class="card-body text-center">
                  <h5 class="card-title">Mechanic List</h5>
                  <p class="card-text">View and manage the list of mechanics.</p>
                  <a href="#" class="btn btn-primary">Mechanic List</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-4">
              <div class="card flex-fill">
                <div class="card-body text-center">
                  <h5 class="card-title">Request List</h5>
                  <p class="card-text">View and manage the list of service requests.</p>
                  <a href="#" class="btn btn-primary">Request List</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>        
      </>
    );
  }