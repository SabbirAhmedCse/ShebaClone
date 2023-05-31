import { useNavigate } from "react-router-dom";
import {Button} from 'semantic-ui-react'
import commonDataAccess from "../DataAccess/CommonDataAccess";

export default function Actions({url, Id, options}) {

    const nav = useNavigate();
    const link = {
        url: url,
        id : Id
    }
    
    const handleRemove = () => {
        dataAccess.remove(url + '/' + Id).then((response) => {
        }).catch((error) => {
            console.error(error);
        });

        nav('/Services');
    }

    if(options === 3)
    {
        return (

            <>
            <Button type="submit" onClick={() => nav('/ServiceDetails', {state:link})}>Details</Button>
            <Button type="submit" onClick={() => nav('/UpdateService', {state:link})}>Update</Button>
            <Button type="submit" onClick={handleRemove}>Delete</Button>
            </> 
        )
    }
    else
    {
        return (<Button type="submit" onClick={() => nav('/ServiceDetails', {state:link})}>Details</Button>)
    }
}