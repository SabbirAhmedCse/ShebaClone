import axios, { AxiosError, AxiosResponse } from "axios";
import { CustomAxiosResponse } from "../models/response";
import { Filter } from "../@redux/listSlice";
import { keys } from "../common/constants";


export const CommonDataAccess = {

  get: (url: string, params?: any) => {

    return axios
      .get(url, {
        headers: {
          mid: `${localStorage.getItem("mid")}`,
          Authorization: `Token ${localStorage.getItem(keys.authorization)}`,
        },
        params: params,
      })
      .then(commonDataAccess.handleResponse)
      .catch(commonDataAccess.handleError);
  },

  post: (url: string, data?: any, params?: any) => {

    return axios
      .post(url, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem(keys.authorization)}`,
        },
        params: params,
      })
      .then(commonDataAccess.handleResponse)
      .catch(commonDataAccess.handleError);
  },

  delete: (url: string, params?: any) => {

    return axios
      .delete(url, {
        headers: {
          Authorization: `Token ${localStorage.getItem(keys.authorization)}`,
        },        
          params:params              
      })
      .then(commonDataAccess.handleResponse)
      .catch(commonDataAccess.handleError);
  },

  handleResponse: (response: CustomAxiosResponse) => {
    const responseData = response.data;
    // if (responseData.success !== true) {
    //   throw new Error(responseData.message);
    // }
    return responseData;
  },

  handleError: (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    if (error.response?.data.message) throw Error(error.response.data.message);
    throw Error(error.message);
  },
  
};
