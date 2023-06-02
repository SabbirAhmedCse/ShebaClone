import { useNavigate } from "react-router-dom";
import {Button} from 'semantic-ui-react'
import commonDataAccess from "../dataAccess/CommonDataAccess";

export default function Actions({id, actions, functions}) {

    return (
        <>
          {
            actions.map((item, idx) => (

            <Button key={idx} type="submit" onClick={() => {functions[idx](id)}}>

              {item}

            </Button>

            ))
          }
        </>
      );
}