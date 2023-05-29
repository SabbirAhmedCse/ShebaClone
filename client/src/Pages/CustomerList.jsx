import { Table,Button,Container,Header } from 'semantic-ui-react'
import axios from 'axios';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Search } from 'semantic-ui-react'


const baseURL = "https://localhost:7194/api/User/Customer";
export default function CustomerList() {

  const [post, setPost] = React.useState(null);
  const nav=useNavigate();
 
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);     
    });
  }, []);

  if (!post) return null;
  const handleDetails=(id)=>{
    nav('/CustomerDetails',{state:id});
  }


 return <>
 
 <Container>
 <br />
   
 <Header as='h2' icon textAlign='center'>
    <Header.Content>CustomerList</Header.Content>
    </Header>
  <Search>

  </Search> 
  <Table striped>
    <Table.Header>
    
      <Table.Row>
        <Table.HeaderCell>Customer Id</Table.HeaderCell>
        <Table.HeaderCell>Customer Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>MobileNumber</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {
   
      post.map((item)=> 
      
      
      <Table.Row>
        
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.email}</Table.Cell>
      <Table.Cell>{item.mobileNumber}</Table.Cell>
      <Table.Cell>{item.address}</Table.Cell>
      <Table.Cell>{item.city}</Table.Cell>
      <Table.Cell>{item.gender}</Table.Cell>
      <Button primary type='Submit' onClick={()=>handleDetails(item.id)}> Details</Button>
    </Table.Row>
    )
     }
    </Table.Body>
  </Table>
 
  </Container>
 </>
};