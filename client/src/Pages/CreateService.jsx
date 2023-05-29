import {useNavigate } from 'react-router-dom';
import { useState} from 'react'
import {Form} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
import dataAccess from '../DataAccess/dataAccess';

export default function CreateService() {

    const [data, setData] = useState([]);

    const [servicetitle, setServicetitle] = useState(null);
    const [servicesubtitle, setServicesubtitle] = useState(null);
    const [serviceimageurl, setServiceimageurl] = useState(null);
    const [servicedescription, setServicedescription] = useState(null);
    const [serviceprice, setServiceprice] = useState(null);

    const nav = useNavigate();
    const location = useLocation();
    const url = location.state;

    const handleCreate = () => {
        var data = {servicesCategoryId: 1, subCategory: servicesubtitle, description: servicedescription, price: serviceprice, image: serviceimageurl};
        dataAccess.post(url,data).then((response) => {
        }).catch((error) => {
            console.error(error);
        });
        nav('/Services');
    }

    return (
        <>
            <div className="main">
                <h2>Create Service</h2>
            </div>
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Input width={4} fluid label='Service Title' placeholder='Service Title' onChange={(e) => setServicetitle(e.target.value)} />
                        <Form.Input width={4} fluid label='Service Subtitle' placeholder='Service Subtitle' onChange={(e) => setServicesubtitle(e.target.value)} />
                    </Form.Group>
                    <Form.Input width={4} fluid label='Service ImageUrl' placeholder='Service ImageUrl' onChange={(e) => setServiceimageurl(e.target.value)} />
                    <Form.Input width={4} fluid label='Service Price' placeholder='Service Price' onChange={(e) => setServiceprice(e.target.value)} />
                    <Form.TextArea width={8} label='Description' placeholder='Tell us more about service...' onChange={(e) => setServicedescription(e.target.value)} />
                    <Form.Group>
                        <Form.Button onClick={handleCreate}>Create</Form.Button>
                        <Form.Button onClick={() => { nav('/Services') }}>Back to Lists</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}