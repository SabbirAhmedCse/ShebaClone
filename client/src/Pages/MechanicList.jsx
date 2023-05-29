import { useState} from 'react';
import {  Pagination } from 'semantic-ui-react'

import axios from 'axios'

import CommonTable from '../Components/Table';

function SearchBar() {
    return (
        <div className="main">
            <div class="ui search">
                <div class="ui icon input">
                    <input class="prompt"
                        type="text"
                        placeholder="Search..." />
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        </div>
    );
}

export default function ServicesList() {

    const [data, setData] = useState([]);
 

    axios.get('https://localhost:7194/api/User/Mechanics').then((response) => {
        setData(response.data);
    })

    const arr = [" Id", "Name", "Email", "Mobile Number", "City","Area","Address","Active Status"];
    const dbData = ["id", "name", "email", "mobileNumber", "city","area","address","isActive"];

    return (
        <div className="servicelist">
            <div className="main">
                <h2>Mechanic Lst</h2>
            </div>
            <SearchBar />
           
            <CommonTable data = {data} headers={arr} dbData = {dbData} actions = {1} />
            <Pagination defaultActivePage={5} totalPages={3}/>
        </div>
    );
}