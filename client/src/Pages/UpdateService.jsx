import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
export default function UpdateService() {

    const [servicetitle, setServicetitle] = useState(null);
    const [servicesubtitle, setServicesubtitle] = useState(null);
    const [serviceimageurl, setServiceimageurl] = useState(null);
    const [servicedescription, setServicedescription] = useState(null);
    const [serviceprice, setServiceprice] = useState(null);

    const nav = useNavigate();
    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        axios.get('https://localhost:7194/api/Service/' + id).then((response) => {
            setServicetitle(null);
            setServicesubtitle(response.data.subCategory);
            setServicedescription(response.data.description);
            setServiceprice(response.data.price);
            setServiceimageurl(response.data.image);
        })
    }, [])

    const handleUpdate = () => {
        axios.put('https://localhost:7194/api/Service/' + id, {

            id: id, servicesCategoryId: 1, subCategory: servicesubtitle, description: servicedescription, price: serviceprice, image: serviceimageurl
        });
        nav('/Services');
    }
    return (
        <>
            <div className="main">
                <h2>Update Service</h2>
            </div>
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Input width={3} fluid label='Service Title' placeholder='Service Title' onChange={(e) => setServicetitle(e.target.value)} defaultValue={"title"} />
                        <Form.Input width={3} fluid label='Service Subtitle' placeholder='Service Subtitle' onChange={(e) => setServicesubtitle(e.target.value)} defaultValue={servicesubtitle} />
                    </Form.Group>
                    <Form.Input width={3} fluid label='Service ImageUrl' placeholder='Service ImageUrl' onChange={(e) => setServiceimageurl(e.target.value)} defaultValue={serviceimageurl} />
                    <Form.Input width={3} fluid label='Service Price' placeholder='Service Price' onChange={(e) => setServiceprice(e.target.value)} defaultValue={serviceprice} />
                    <Form.TextArea width={6} label='Description' placeholder='Tell us more about service...' onChange={(e) => setServicedescription(e.target.value)} defaultValue={servicedescription} />
                    <Form.Group>
                        <Form.Button onClick={handleUpdate}>Update</Form.Button>
                        <Form.Button onClick={() => { nav('/Services') }}>Back to Lists</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}