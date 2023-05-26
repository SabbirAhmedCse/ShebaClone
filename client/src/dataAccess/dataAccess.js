import axios from "axios";
import config from "../utils/config";

const get = async (url, prams=null) =>{
    return (await axios.get(url,{headers:{Authorization:config.key.token,prams}})).data
}
const post = async (url,data, prams=null) =>{
    return (await axios.post(url,data,{headers:{Authorization:config.key.token,prams}})).data
}
const update = async (url, data, prams=null) =>{
    return (await axios.put(url,data,{headers:{Authorization:config.key.token,prams}})).data
}
const remove = async (url, prams=null) =>{
    return (await axios.delete(url,{headers:{Authorization:config.key.token,prams}})).data
}
const dataAccess ={
    get,
    post,
    update,
    remove
}
export default dataAccess;