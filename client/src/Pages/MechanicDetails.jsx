import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Table,Container,Header,  Button } from 'semantic-ui-react'


const baseURL = 'https://localhost:7194/api/User?Id=';

export default function MechanicDetails() {
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
      
        
        <div className='contain'>
           
            <Header as='h2' icon textAlign='center'>
            <Header.Content>Mechanics Details</Header.Content>
            </Header>
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Mechanic ID :
                        </Table.Cell>
                        <Table.Cell>
                            {post.id}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                           Name :
                        </Table.Cell>
                        <Table.Cell>
                            {post.name}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                          Mobile Number :
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
                           Area :
                        </Table.Cell>
                        <Table.Cell>
                            {post.area}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                           City :
                        </Table.Cell>
                        <Table.Cell>
                            {post.city}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                          Expert :
                        </Table.Cell>
                        <Table.Cell>
                            {post.expert}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                         IsAvailable :
                        </Table.Cell>
                        <Table.Cell>
                            {JSON.stringify(post.isActive)}
                        </Table.Cell>
                    </Table.Row>
                  
                </Table.Body>
            </Table>
            <Button primary onClick={() => { nav('/Mechanics') }}>Back to Lists</Button>

            </div>
    );
}