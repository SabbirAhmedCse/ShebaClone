import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import commonDataAccess from '../dataAccess/CommonDataAccess';


export default function UpdateService() {

    const [data, setData] = useState([]);
    const [servicetitle, setServicetitle] = useState(null);
    const [servicesubtitle, setServicesubtitle] = useState(null);
    const [serviceimageurl, setServiceimageurl] = useState(null);
    const [servicedescription, setServicedescription] = useState(null);
    const [serviceprice, setServiceprice] = useState(null);
    const[servicecreateBy, setServicecreateBy] = useState(null);
    const[serviceupdateBy, setServiceupdateBy] = useState(null);

    const nav = useNavigate();
    const location = useLocation();
    const {link} = location.state;

    useEffect(() => {
        if(link.url&&link.id)
        commonDataAccess.get(link.url + '/' + link.id).then((response) => {
            
            setData(response);
            setServicetitle(null);
            
        }).catch((error) => {
            console.error(error);
        });  
     }, [link.url,link.id]);

     useEffect(() => {
        if(data){
            setServicesubtitle(data.subCategory);
            setServicedescription(data.description);
            setServiceprice(data.price);
            setServiceimageurl(data.imageUrl);}
     },[data]);
    
    const handleUpdate = () => {
        var data = {id: link.id, servicesCategoryId: 2, subCategory: servicesubtitle, 
        description: servicedescription, price: serviceprice, 
        imageUrl: serviceimageurl, createBy: 1001, createAt: "2023-06-05T09:24:55.626Z", isActive: true, isDelete: false};

        commonDataAccess.update(link.url + '/' + link.id, data).then((response) => {
             nav('/Services');
        }).catch((error) => {
            console.error(error);
        });        
        
    }

    return (
        <>
            <div className="main">
                <h2>Update Service</h2>
            </div>
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Input width={4} fluid label='Service Title' placeholder='Service Title' onChange={(e) => setServicetitle(e.target.value)} defaultValue={"title"} />
                        <Form.Input width={4} fluid label='Service Subtitle' placeholder='Service Subtitle' onChange={(e) => setServicesubtitle(e.target.value)} defaultValue={servicesubtitle} />
                    </Form.Group>
                    <Form.Input width={4} fluid label='Service ImageUrl' placeholder='Service ImageUrl' onChange={(e) => setServiceimageurl(e.target.value)} defaultValue={serviceimageurl} />
                    <Form.Input width={4} fluid label='Service Price' placeholder='Service Price' onChange={(e) => setServiceprice(e.target.value)} defaultValue={serviceprice} />
                    <Form.TextArea width={8} label='Description' placeholder='Tell us more about service...' onChange={(e) => setServicedescription(e.target.value)} defaultValue={servicedescription} />
                    <Form.Group>
                        <Form.Button primary onClick={handleUpdate}>Update</Form.Button>
                        <Form.Button primary onClick={() => { nav('/Services')}}>Back to Lists</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}