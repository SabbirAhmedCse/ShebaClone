import { useState} from 'react';
import {  Pagination } from 'semantic-ui-react'
import axios from 'axios'
import CommonTable from '../Components/Table';

function SearchBar() {
    return (
        <div className="main">
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt"
                        type="text"
                        placeholder="Search..." />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        </div>
    );
}

export default function CustomerList() {

    const [data, setData] = useState([]);
    const nav = useNavigate();
    var url = 'https://localhost:7194/api/User/customer';
    const Columns = [
        {
            name: "Id",
            value: "id"
        },
        {
            name: "Name",
            value: "name"
        },
        {
            name: "Email",
            value: "email"
        },
        {
            name: "Mobile Number",
            value: "mobilneNumber"
        },
        {
            name: "City",
            value: "city"
        },
        {
            name: "Area",
            value: "area"
        },
        {
            name: "Address",
            value: "address"
        },
    ]

    return (
        
        <div className="customerlist">
            <div className="main">
                <h2>CustomerList</h2>
            </div>
            <SearchBar />
            {/* <Button primary type="submit" onClick={() => nav('/CreateService', {state:url})}>Create Service</Button>
            <CommonTable data={data} Columns = {Columns} actions={actions} functions={functions}/> */}
        </div>
    );
}