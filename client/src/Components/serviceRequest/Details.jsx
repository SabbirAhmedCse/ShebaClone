import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";
const Details = () => {
  let { id } = useParams();
  const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
  const [expertMechanics, setExpertMechanics] = useState([]);
  const [addMechanic, setAddMechanic] = useState({
    serviceId: id,
    mechanicId: null,
  });
  const [selectMechanicName, setSelectMechanicName] = useState("");

  const details = async () => {
    const serviceRequestData =
      await serviceRequestDataAccess.serviceRequestGetById(id);
    setEequestedServiceDetails({ ...serviceRequestData });
    const expertMechanicList =
      await serviceRequestDataAccess.serviceExpertMechanicGetAll(id);
    console.log(expertMechanicList);
    setExpertMechanics([...expertMechanicList]);
  };
  useEffect(() => {
    details();
  }, []);
  const addMechanicHandle = async () => {
    if (addMechanic.mechanicId == null) {
      alert("please select mechanic");
    } else {
      const willAddMachanic = await swal({
        title: "Are you sure?",
        text: "You want to add mechanic this service request!",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      });
      if (willAddMachanic) {
        const response =
          await serviceRequestDataAccess.serviceRequestAddMechanic(addMechanic);
        swal({
          text: `${response}`,
        });
      }
    }
  };

  console.log(selectMechanicName);
  return (
    <div>
      <h1>Add Menanic?</h1>
      <div>
        <label>Customer Name: </label>
        <span>{requestedServiceDetails?.customerName}</span>
      </div>
      <div>
        <label>Service Category: </label>
        <span>{requestedServiceDetails?.serviceCategory}</span>
      </div>
      <div>
        <label>Service Description: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Service Date: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Service Status: </label>
        <span>{requestedServiceDetails?.serviceStatus}</span>
      </div>
      <div>
        <label>Mechanic Status: </label>
        <span>{requestedServiceDetails?.mechanicStatus}</span>
      </div>
      {requestedServiceDetails.mechanicName ? (
        <div>
          <label>Assigned Mechanic: </label>
          <span>{requestedServiceDetails?.mechanicName}</span>
        </div>
      ) : (
        <div>
          <label>Expert Mechanic: </label>
          <select
            id="mechanic"
            onChange={(e) => {
              setAddMechanic((prevState) => ({
                ...prevState,
                mechanicId: e.target.value,
              }));
              setSelectMechanicName(e.target.selectedOptions[0].text);
            }}
          >
            <option>Select Mechanic</option>
            {expertMechanics.map((val) => {
              return (
                <option key={val.id} value={val.id}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <div>
        <Button
          className={"btn btn-success"}
          name={"Add"}
          method={() => addMechanicHandle()}
        />
        <Link to={`/addmechanic/${requestedServiceDetails.id}`}>
          <Button className={"btn btn-warning"} name={"Cancel"} />
        </Link>
        <Link to={`/reject/${requestedServiceDetails.id}`}>
          <Button className={"btn btn-danger"} name={"Reject"} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
