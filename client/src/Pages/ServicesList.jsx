import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination, Search, Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import CommonTable from '../Components/Table';
import commonDataAccess from '../dataAccess/CommonDataAccess';

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

export default function ServicesList() {

    var url = 'https://localhost:7194/api/Service';
    const nav = useNavigate();


    const Columns = [
        {
            name: "Service Id",
            value: "id"
        },
        {
            name: "Sub Category",
            value: "subCategory"
        },
        {
            name: "Description",
            value: "description"
        },
        {
            name: "Price",
            value: "price"
        },
        {
            name: "Image Url",
            value: "image"
        },
    ]
    const actions = ["Details", "Update", "Delete"];

    const handleRemove = (id)=> {
        commonDataAccess.remove(url + '/' + id).then((response) => {
        }).catch((error) => {
            console.error(error);
        });

        nav('/Services');
    }

    const functions = [
    (id) => nav('/ServiceDetails', { state: { link: { url, id } } }),
    (id) => nav('/UpdateService', { state: { link: { url, id } } }),
    (id) => {handleRemove(id)}
  ];

    return (
        
        <div className="servicelist">
            <div className="main">
                <h2>Service Lists</h2>
            </div>
            <SearchBar />
            <Button type="submit" onClick={() => nav('/CreateService', {state:url})}>Create Service</Button>
            <CommonTable url={url} Columns = {Columns} actions={actions} functions={functions} options = {actions.length} />
        </div>
    );
}