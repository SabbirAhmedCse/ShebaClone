import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";
import Loader from "../spinner/Loader";

const Table = () => {
  const [serviceRequestData, setServiceRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pageNumber = 1,
    pageSize = 20;
    const serviceRequestAcceptData ={
      id:null,
      serviceStatus:'Approved'
    }
  const tableDataHandler = async () => {
    const data = await serviceRequestDataAccess.serviceRequestsGetAll(
      pageNumber,
      pageSize
    );

   if(data!=null){
    setServiceRequestData([...data]);
    setIsLoading(false);
   }
    
  };
  useEffect(() => {
    tableDataHandler();
  }, []);
  const serviceRequestAcceptHandeler= async (id) =>{
    serviceRequestAcceptData.id=id;
    console.log(serviceRequestAcceptData);
    const willAdd= await swal({
      title: "Are you sure?",
      text: "You want to accept this service request!",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    })
    if(willAdd){
      const response = await serviceRequestDataAccess.serviceRequestAccept(serviceRequestAcceptData);
      swal({
        text:`${response}`,
        icon: 'success',
      })
    }
  }
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Service Category</th>
            <th>Service Sub-Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Service Status</th>
            <th>Address</th>
            <th>Mechanic Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading? 
                <td colspan="100%">
                  <Loader/>
                </td> : serviceRequestData && serviceRequestData.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.customerName}</td>
                <td>{val.serviceCategory}</td>
                <td>{val.serviceSubCategory}</td>
                <td>{val.description}</td>
                <td>{val.serviceDate}</td>
                <td>{val.serviceStatus}</td>
                <td>{val.address}</td>
                <td>{val.mechanicStatus}</td>
                <td>
                  {val.serviceStatus =='Approved' ? '' : <Button className={"btn btn-success"} name={"Accept"} method={()=>serviceRequestAcceptHandeler(val.id)} />}
                  <Link to={`/addmechanic/${val.id}`}>
                    <Button
                      className={"btn btn-primary"}
                      name={"Add Mechanic"}
                    />
                  </Link>
                  <Link to={`/reject/${val.id}`}>
                    <Button className={"btn btn-danger"} name={"Reject"} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
