import {useNavigate } from 'react-router-dom';
import { useState} from 'react'
import {Form} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
import commonDataAccess from '../dataAccess/CommonDataAccess';

export default function CreateService() {

    const [data, setData] = useState([]);

    const [servicetitle, setServicetitle] = useState(null);
    const [servicesubtitle, setServicesubtitle] = useState(null);
    const [serviceimageurl, setServiceimageurl] = useState(null);
    const [servicedescription, setServicedescription] = useState(null);
    const [serviceprice, setServiceprice] = useState(null);
    const[servicecreateBy, setServicecreateBy] = useState(null);

    const nav = useNavigate();
    const location = useLocation();
    const url = location.state;

    const handleCreate = () => {
        var data = {servicesCategoryId: 2, subCategory: servicesubtitle, 
        description: servicedescription, price: serviceprice, 
        imageUrl: serviceimageurl, createBy: 1000, createAt: "2023-06-05T09:24:55.626Z", isActive: true, isDelete: false};
        
        commonDataAccess.post(url,data).then((response) => {
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
                        <Form.Button primary onClick={handleCreate}>Create</Form.Button>
                        <Form.Button primary onClick={() => { nav('/Services') }}>Back to Lists</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}