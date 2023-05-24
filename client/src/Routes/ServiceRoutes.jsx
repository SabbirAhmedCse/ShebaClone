export default function ServiceRoutes(){
    return(
        <Router>
        <Routes>
          <Route exact path='/' element={<ServicesList />}></Route>
          <Route exact path='/Create' element={<CreateService />}></Route>
          <Route exact path='/Update' element={<UpdateService />}></Route>
          <Route exact path='/Details' element={<ServiceDetails />}></Route>
          <Route exact path='/Services' element={<ServicesList />}></Route>
        </Routes>
      </Router>
    );
}