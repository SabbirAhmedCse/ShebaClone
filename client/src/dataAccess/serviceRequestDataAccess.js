import dataAccess from "./DataAccess";
import config from "../utils/config";

const serviceRequestGetById = async (id) => {
   return await dataAccess.get(`${config.apiUrl}/ServiceRequest/details?Id=${id}`);
};

const serviceRequestsGetAll = (pageNumber, pageSize) => {
  return dataAccess.get(
    `${config.apiUrl}/ServiceRequest/all?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
};

const serviceRequestAccept = (data) => {
  return dataAccess.update(`${config.apiUrl}/ServiceRequest/accept`, data);
};

const serviceExpertMechanicGetAll = (data, params) => {
  return dataAccess.get(
    `${config.apiUrl}ServiceRequest/expertmechanics`,
    data,
    params
  );
};

const serviceRequestAddMechanic = (data, params) => {
  return dataAccess.update(
    `${config.apiUrl}/ServiceRequest/addmachanic`,
    data,
    params
  );
};

const serviceRequestReject = (data, params) => {
  return dataAccess.update(
    `${config.apiUrl}/ServiceRequest/reject`,
    data,
    params
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
