import React, {useState, useEffect } from 'react'
import serviceRequestDataAccess from '../../../dataAccess/serviceRequestDataAccess';
import Searching from '../../../Components/Searching'
import CommonTable from '../../../components/table/CommonTable';

const ServiceRequestList = () => {
  const [serviceRequestlist, setServiceRquestList] =useState([]);
  const requestList = async () =>{
    const list = await serviceRequestDataAccess.serviceRequestsGetAll(1,3);
    console.log(list);
    setServiceRquestList([...list]);
  }
  useEffect(()=>{
    requestList();
  },[])
  console.log(serviceRequestlist);
  return (
    <div>
        <Searching/>
        <CommonTable/>
    </div>
  )
}

export default ServiceRequestList