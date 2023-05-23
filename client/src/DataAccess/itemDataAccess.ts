import { config } from "../common/config";
import { Filter } from "../@redux/listSlice";
import { merchantSlice } from "../@redux/merchantSlice";

import { commonDataAccess } from "./commonDataAccess";
import axios from 'axios';
import { useAppSelector } from "../@redux/hooks";


export const itemDataAccess = {

  getItems: (
    pageNo: number,
    pageSize: number,
    filters: Array<Filter>,
    sortPreference: any
  ) => {
    let _filters = commonDataAccess.readyFilters(filters);

    return commonDataAccess.get(`${config.apiUrl}/Item/getallitems`, {
      name: "",
      pageNo,
      pageSize,
      sortPreference,
      ..._filters,
    });
  },

  getAllItemCategoryData: ()=> {
      return commonDataAccess.get(`${config.apiUrl}/itemcategory/getall`, {
      });
  },

  getAllItemData: async () => {
    await axios.get(`${config.apiUrl}/Item/getAllItemData`).then((res: any) => {
      console.log(res.data.data);
      return res.data.data;
    });
  },
  
  getById: (id: string) => {
    return commonDataAccess.get(
      `${config.apiUrl}/Item/` + id);
  },
};
