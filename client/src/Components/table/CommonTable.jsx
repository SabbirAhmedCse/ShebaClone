import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";

const CommonTable = () => {
  const [serviceRequestData, setServiceRequestData] = useState([]);
  const pageNumber = 1,
    pageSize = 20;

  const tableDataHandler = async () => {
    const data = await serviceRequestDataAccess.serviceRequestsGetAll(
      pageNumber,
      pageSize
    );
    setServiceRequestData([...data]);
  };
  useEffect(() => {
    tableDataHandler();
  }, []);
  console.log(serviceRequestData);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Service Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Service Status</th>
            <th>Address</th>
            <th>Mechanic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {serviceRequestData.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{val.description}</td>
                <td>{val.serviceDate}</td>
                <td>{val.serviceStatus}</td>
                <td>{}</td>
                <td>{val.mechanicId}</td>
                <td>
                  <Button className={"btn btn-success"} name={"Accept"} />
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

export default CommonTable;
