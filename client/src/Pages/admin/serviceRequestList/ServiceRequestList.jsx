import React, {useState, useEffect } from 'react'
import serviceRequestDataAccess from '../../../dataAccess/serviceRequestDataAccess';
import Searching from '../../../Components/Searching'
import CommonTable from '../../../components/table/Table';

const ServiceRequestList = () => {
  const [serviceRequestlist, setServiceRquestList] =useState([]);
  const requestList = async () =>{
    const list = await serviceRequestDataAccess.serviceRequestsGetAll(1,20);
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