import dataAccess from "./DataAccess";
import config from "../utils/config";

const serviceRequestGetById = (params) => {
  return dataAccess.get(`${config.apiUrl} /details`, params);
};

const serviceRequestsGetAll = (params) => {
  return dataAccess.get(`${config.apiUrl}/ServiceRequest/all`, params);
};

const serviceRequestAccept = (data, params) => {
  return dataAccess.update(
    `${config.apiUrl}/ServiceRequest/accept`,
    data,
    params
  );
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
