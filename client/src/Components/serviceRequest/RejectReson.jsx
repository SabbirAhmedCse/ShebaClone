import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import serviceRequestDataAccess from "../../dataAccess/serviceRequestDataAccess";
import Button from "../button/Button";


const RejectReson = () => {
  const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
  const [rejectReason, setRejectReason] = useState({id: null,userId: 1000,reason: ''});
  const {id} = useParams();
  const navigate = useNavigate();
 const cancelHandle = () =>{
  navigate(-1);
 }
  const rejectReasonHandle = async () => {
    console.log(rejectReason);
    const willDelete = await swal({
        title: "Are you sure?",
        text: "you want to reject this service?",
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
 
  const details = async () => {
    const serviceRequestData =
      await serviceRequestDataAccess.serviceRequestGetById(id);
    console.log(serviceRequestData);
    setEequestedServiceDetails({ ...serviceRequestData });
    setRejectReason(prevState=>({
        ...prevState,
        id: id
      }))
  };
  useEffect(() => {
    details();
  }, []);
  return (
    <div className="form-inline">
      <div className="form-group">
        <label>Service Category: </label>
        <span>{requestedServiceDetails?.serviceCategory}</span>
      </div>
      <div>
        <label>Service description : </label>
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
        <Button className={"btn btn-danger"} name={"Cancel"} method={cancelHandle} />
      </div>
    </div>
  );
};

export default RejectReson;
