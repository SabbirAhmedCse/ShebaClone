import React, { useEffect, useState } from 'react';
import serviceRequestDataAccess from '../../dataAccess/serviceRequestDataAccess';
import Add from '../buttons/Add';
import Reject from '../buttons/Reject';
import Cancel from '../buttons/Cancel';
const Details = () => {
    const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
    const [expertMechanics, setExpertMechanics] = useState([]);
    const [addMechanic, setAddMechanic] = useState({})
    const id = 7
    useEffect(() => {
        details();
    },[])

    const details = async () => {
        const serviceRequestData =  await serviceRequestDataAccess.serviceRequestGetById(id);
        console.log(serviceRequestData.serviceId);
        setEequestedServiceDetails({...serviceRequestData})
        const expertMechanicsList = await serviceRequestDataAccess.serviceExpertMechanicGetAll(serviceRequestData.serviceId);
        setExpertMechanics([...expertMechanicsList])
    }
    const addMechanicHandle = (e) =>{
        let value = e.target.value;
        
    }
   
  return (
      <div>
         <div>
            <label>Customer Name: </label>
            <span>{requestedServiceDetails?.description}</span>
         </div>
         <div>
            <label>Category Name: </label>
            <span>{requestedServiceDetails?.description}</span>
         </div>
         <div>
            <label>Service Description: </label>
            <span>{requestedServiceDetails?.description}</span>
         </div>
         <div>
            <label>Expert Mechanic: </label>
            <select id="mechanic" onChange={(e)=>addMechanicHandle(e)}>
                {expertMechanics.map(val=>{ return(
                    <option key={val.id} value={val.id}>{val.name}</option>
                )})}
            </select>
         </div>
         <div>
         <Add></Add>
         <Reject></Reject>
         <Cancel></Cancel>
         </div>
      </div>
  )
}

export default Details