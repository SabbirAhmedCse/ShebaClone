import { Table,Button,Container,Header } from 'semantic-ui-react'
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import commonDataAccess from '../dataAccess/CommonDataAccess';


const baseURL = "https://localhost:7194/api/User/customer";
export default function CustomerList() {

  const [post, setPost] = useState([]);
  const nav=useNavigate();
 
  useEffect(() => {
   commonDataAccess.get(baseURL).then((response) => {
      setPost([...response]);     
    });
  }, []);
console.log(post);
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