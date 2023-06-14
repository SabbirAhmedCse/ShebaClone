import commonDataAccess  from "./commonDataAccess";
import config from "../utils/config";

const  serviceRequestGetById = async (id) => {
   return await commonDataAccess.get(`${config.baseUrl}/ServiceRequest/details?Id=${id}`);
};

const serviceRequestsGetAll = (pageNumber, pageSize) => {
  return commonDataAccess.get(
    `${config.baseUrl}/ServiceRequest/requestedService?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
};

const serviceRequestAccept = (data) => {
  return commonDataAccess.update(`${config.baseUrl}/ServiceRequest/accept`, data);
};

const serviceExpertMechanicGetAll = async (id) => {
  console.log(id)
  return await commonDataAccess.get( `${config.baseUrl}/ServiceRequest/expertmechanics?serviceRequestId=${id}`);
};

const serviceRequestAddMechanic = (data, params) => {
  return commonDataAccess.update(
    `${config.baseUrl}/ServiceRequest/addmachanic`,
    data,
    params
  );
};

const serviceRequestReject = (data) => {
  return commonDataAccess.post(
    `${config.baseUrl}/ServiceRequest/reject`,
    data
  );
};

const serviceRequestDataAccess = {
  serviceRequestsGetAll,
  serviceRequestGetById,
  serviceRequestAccept,
  serviceExpertMechanicGetAll,
  serviceRequestAddMechanic,
  serviceRequestReject,
};
export default serviceRequestDataAccess;
