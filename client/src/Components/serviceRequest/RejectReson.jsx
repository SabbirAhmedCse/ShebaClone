import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";


const RejectReson = () => {
  const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
  const [rejectReason, setRejectReason] = useState({id: 0,userId: 1003,reason: ''});
  const id = 7;
  const rejectReasonHandle = async () => {
    console.log(rejectReason);
    const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this file?",
        icon: "warning",
        dangerMode: true,
      });
    if (willDelete) {
        const res = await serviceRequestDataAccess.serviceRequestReject(
            rejectReason
          );
        swal(`${res}`);
      }
  };
  useEffect(() => {
    details();
  }, []);
  console.log(rejectReason);
  const details = async () => {
    const serviceRequestData =
      await serviceRequestDataAccess.serviceRequestGetById(id);
    console.log(serviceRequestData.serviceId);
    setEequestedServiceDetails({ ...serviceRequestData });
    setRejectReason(prevState=>({
        ...prevState,
        id: serviceRequestData.id
      }))
  };
  return (
    <div className="form-inline">
      <div className="form-group">
        <label>Service Category: </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div>
        <label>Service sub-Category : </label>
        <span>{requestedServiceDetails?.description}</span>
      </div>
      <div className="form-group">
        <label className="sr-only">Description for reject : </label>
        <textarea
          className="form-control"
          onChange={(e) => setRejectReason(prevState=>({
            ...prevState,
            reason: e.target.value,
          }))}
        ></textarea>
      </div>
      <div>
        <Button className={"btn btn-primary"} name={"Submit"}method={rejectReasonHandle}/>
        <Button className={"btn btn-danger"} name={"Cancel"} />
      </div>
    </div>
  );
};

export default RejectReson;
