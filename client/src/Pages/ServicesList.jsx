import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Grid, Search } from 'semantic-ui-react'

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

export default function ServiceList() {

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

    return (
        <div className="servicelist">
            <div className="main">
                <h2>Service Lists</h2>
            </div>

            <SearchBar />

            <Button onClick={() => { nav('/Create'); }}>Create Services</Button>

            <Table singleLine fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Service Id</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Sub Category</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Description</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Price</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Image Url</Table.HeaderCell>
                        <Table.HeaderCell colspan='3' textAlign='center'>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell textAlign='center'>{data.id}</Table.Cell>
                                <Table.Cell textAlign='center'>{data.subCategory}</Table.Cell>
                                <Table.Cell fixed textAlign='center'>{data.description}</Table.Cell>
                                <Table.Cell textAlign='center'>{data.price}</Table.Cell>
                                <Table.Cell textAlign='center'>{data.image}</Table.Cell>
                                <div className='center'>
                                    <Button type='submit' onClick={() => handleDetails(data.id)} >Details</Button> <Button type='submit' onClick={() => handleUpdate(data.id)} >Update</Button> <Button type='submit' onClick={() => handleDelete(data.id)} >Delete</Button>
                                </div>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table >
            <Pagination defaultActivePage={5} totalPages={3}/>
        </div>
    );
}