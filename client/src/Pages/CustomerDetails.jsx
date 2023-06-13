import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Table,Container,Header,  Button } from 'semantic-ui-react'
import commonDataAccess from '../dataAccess/CommonDataAccess';



const baseURL = 'https://localhost:7194/api/User?Id=';

export default function CustomerDetails() {
    const [post, setPost] = useState(null);
    const nav = useNavigate();
    const location = useLocation();
    const {link} = location.state;
    console.log(link.id);
    useEffect(() => {
        commonDataAccess.get(baseURL+ link.id).then((response) => {
            setPost(response);
        }).catch((error) => {
            console.error(error);
        });  
     }, []);

      if (!post) return null;
     

    return (
      
        
        <div className='contain'>
           
            <Header as='h2' icon textAlign='center'>
            <Header.Content>CustomerDetails</Header.Content>
            </Header>
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Customer ID :
                        </Table.Cell>
                        <Table.Cell>
                            {post.id}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                           Customer Name :
                        </Table.Cell>
                        <Table.Cell>
                            {post.name}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                          Email :
                        </Table.Cell>
                        <Table.Cell>
                            {post.email}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                           Mobile Number:
                        </Table.Cell>
                        <Table.Cell>
                            {post.mobileNumber}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                         Address :
                        </Table.Cell>
                        <Table.Cell>
                            {post.address}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        City:
                        </Table.Cell>
                        <Table.Cell>
                            {post.city}
                        </Table.Cell>
                    </Table.Row>
                    
                    <Table.Row>
                        <Table.Cell>
                        Gender:
                        </Table.Cell>
                        <Table.Cell>
                            {post.gender}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button primary onClick={() => { nav('/Customers') }}>Back to Lists</Button>
            </div>
    );
}