import { Table,Button,Container,Header } from 'semantic-ui-react'
import axios from 'axios';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Pagination,Search } from 'semantic-ui-react'



const baseURL = "https://localhost:7194/api/User/Mechanics";

export default function MechanicsList() {

  
  const [post, setPost] = React.useState(null);
  const nav=useNavigate();
 

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      
    });
  }, []);

  if (!post) return null;
  const handleDetails=(id)=>{
    nav('/MechanicDetails',{state:id});
  }

 

 return <>
 
 <Container>
 <br />
  <Search> 
   
  </Search>

 <Header as='h2' icon textAlign='center'>
    <Header.Content>Mechanics List</Header.Content>
    </Header>
  <Table striped>
    <Table.Header>
    
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Mobile Number</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Expert</Table.HeaderCell>
        <Table.HeaderCell>Active</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {
   
      post.map((item)=> 
      
      
      <Table.Row>
        
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.mobileNumber}</Table.Cell>
      <Table.Cell>{item.address}</Table.Cell>
      <Table.Cell>{item.expert}</Table.Cell>
      <Table.Cell>{JSON.stringify(item.isActive)}</Table.Cell>
      <Button primary type='Submit' onClick={()=>handleDetails(item.id)}> Details</Button>
     

    </Table.Row>
    )
     }
    </Table.Body>
  </Table>
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
  </Container>
 </>
};

