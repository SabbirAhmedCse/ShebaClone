import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";
const Details = () => {
  const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
  const [expertMechanics, setExpertMechanics] = useState([]);
  const [addMechanic, setAddMechanic] = useState({});
  const id = 7;
 
  const details = async () => {
    const serviceRequestData = await serviceRequestDataAccess.serviceRequestGetById(id);
    console.log(serviceRequestData.serviceId);
    setEequestedServiceDetails({ ...serviceRequestData });
    const expertMechanicList = await serviceRequestDataAccess.serviceExpertMechanicGetAll(serviceRequestData.serviceId);
    setExpertMechanics([...expertMechanicList]);
  };

  useEffect(() => {
    details();
  }, []);

  const addMechanicHandle = (e) => {
    let value = e.target.value;
  };

  return (
    <div>
      <div>
        <label>Customer Name: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Category: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Service Description: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Expert Mechanic: </label>
        <select id="mechanic" onChange={(e) => addMechanicHandle(e)}>
          {expertMechanics.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Button className={"btn btn-success"} name={"Add"} />
        <Link to={`/addmechanic/${requestedServiceDetails.serviceId}`}>
          <Button className={"btn btn-warning"} name={"Cancel"} />
        </Link>
        <Link to={`/reject/${requestedServiceDetails.serviceId}`}>
          <Button className={"btn btn-danger"} name={"Reject"} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
