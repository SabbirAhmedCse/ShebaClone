import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Table,Container,Header,  Button } from 'semantic-ui-react'



const baseURL = 'https://localhost:7194/api/User?Id=';

export default function CustomerDetails() {
    const [post, setPost] = React.useState(null);
   
    const nav = useNavigate();
    const location = useLocation();
    const Uid = location.state;

    React.useEffect(() => {
        axios.get(baseURL+Uid).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;
     

    return (
      
        
        <Container>
           
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
            <Button primary onClick={() => { nav('/CustomerList') }}>Back to Lists</Button>

            </Container>
    );
}