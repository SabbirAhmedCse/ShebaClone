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

export default function CustomerList() {
    const [data, setData] = useState([]);
    const nav = useNavigate();
    var url = 'https://localhost:7194/api/User/userType?type=customer';

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
            value: "mobileNumber"
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
    const actions = ["Details"];

    useEffect(() => {
        commonDataAccess.get(url)
          .then((data) => setData(data))
          .catch((error) => {            
            console.error('Error fetching data:', error);
          });
      }, [url]);

    console.log(data);
    const functions = [

    (id)=> nav('/CustomerDetails', { state: { link: { url, id } } })
  ];
    
    return (
        <div className='customerlist'>
            <div className="main">
                <h2>Customer List</h2>
            </div>
            <SearchBar />
            <CommonTable data={data} Columns = {Columns} actions={actions} functions={functions}/>
        </div>
    );
}
