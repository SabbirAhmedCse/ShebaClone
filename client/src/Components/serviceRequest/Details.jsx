import React, { useEffect, useState } from 'react'
import serviceRequestDataAccess from '../../DataAccess/serviceRequestDataAccess'
import { useParams } from 'react-router-dom';
const Details = () => {
    const [requestedServiceDetails, setEequestedServiceDetails] = useState({});
    const id = useParams()
    const details = async () => {
        return await serviceRequestDataAccess.serviceRequestGetById(id);
    }
    useEffect(() => {
        details();
    },[])
  return (
      <div>
          
      </div>
  )
}

export default Details