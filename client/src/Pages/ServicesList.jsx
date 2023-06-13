import { useState, useEffect } from 'react';
import { Table, TableHeader, Pagination, Search, Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import CommonTable from '../Components/Table';
import commonDataAccess from '../dataAccess/CommonDataAccess';
import config from '../utils/config';


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

    const [data, setData] = useState([]);
    const nav = useNavigate();
    var url = `${config.baseUrl}/Service`;

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
            value: "imageUrl"
        },
    ]
    const actions = ["Details", "Update"];

    useEffect(() => {
        commonDataAccess.get(url)
          .then((data) => setData(data))
          .catch((error) => {
            
            console.error('Error fetching data:', error);
          });
      }, [url]);

    console.log(data);

    const functions = [

    (id) => nav('/ServiceDetails', { state: { link: { url, id } } }),
    (id) => nav('/UpdateService', { state: { link: { url, id } } }),

  ];

    return (
        
        <div className="servicelist">
            <div className="main">
                <h2>Service Lists</h2>
            </div>
            <SearchBar />
            <Button primary type="submit" onClick={() => nav('/CreateService', {state:url})}>Create Service</Button>
            <CommonTable data={data} Columns = {Columns} actions={actions} functions={functions}/>
        </div>
    );
}