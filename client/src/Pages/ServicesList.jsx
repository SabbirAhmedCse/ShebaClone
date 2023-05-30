import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Grid, Search } from 'semantic-ui-react'
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

export default function ServicesList() {

    var url = 'https://localhost:7194/api/Service';
    const nav = useNavigate();

    const TableHeader = ["Service Id", "Sub Category", "Description", "Price", "Image Url"];
    const dbData = ["id", "subCategory", "description", "price", "image"];

    return (
        
        <div className="servicelist">
            <div className="main">
                <h2>Service Lists</h2>
            </div>
            <SearchBar />
            <Button type="submit" onClick={() => nav('/CreateService', {state:url})}>Create Service</Button>
            <CommonTable url={url} headers={TableHeader} dbData = {dbData} options = {3} />
        </div>
    );
}