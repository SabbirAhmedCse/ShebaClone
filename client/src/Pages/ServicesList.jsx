import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Grid, Search } from 'semantic-ui-react'
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
    const nav = useNavigate();

    axios.get('https://localhost:7194/api/Service').then((response) => {
        setData(response.data);
    })

    const handleDelete = (id) => {
        axios.delete('https://localhost:7194/api/Service/' + id);
        nav('/Services');
    }

    const handleUpdate = (id) => {
        nav('/Update', { state: id });
    }

    const handleDetails = (id) => {
        nav('/Details', { state: id });
    }

    const arr = ["Service Id", "Sub Category", "Description", "Price", "Image Url", "IsActive"];
    const dbData = ["id", "subCategory", "description", "price", "image", "isActive"];

    return (
        <div className="servicelist">
            <div className="main">
                <h2>Service Lists</h2>
            </div>
            <SearchBar />
            <Button onClick={() => { nav('/Create'); }}>Create Services</Button>
            <CommonTable data = {data} headers={arr} dbData = {dbData} actions = {1} />
            <Pagination defaultActivePage={5} totalPages={3}/>
        </div>
    );
}