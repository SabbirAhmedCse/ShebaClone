import { Table,Container,Button,Header } from 'semantic-ui-react'

import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react'
import { useEffect, useState } from "react"




export default function MechanicListWithSearch(){
   const nav=useNavigate();
    const [data,setData]=useState([]);
    const[searchApiData,setSearchApiData]=useState([]);
    const [filterVal,SetFilterVal]=useState('');
    useEffect(()=>{
        const FetchData=()=>{
            fetch('https://localhost:7194/api/User/Mechanics')
            .then(response=>response.json())
            .then(json=>{
                setData(json)
                setSearchApiData(json)

            })

        }
        FetchData();
    },[])
    const handleFilter=(e)=>{
        if(e.target.value==='')
           setData(searchApiData)
     else{
          const filterResult=  searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())||item.area.toLowerCase().includes(e.target.value.toLowerCase())||item.expert.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        SetFilterVal(e.target.value)
}  

  if (!data) return null;
  const handleDetails=(id)=>{
    nav('/MechanicDetails',{state:id});
  }
    
    return(<>
       <Container>
 <br />


     <input placeholder='Serch' value={filterVal} onInput={(e)=>handleFilter(e)} />
  
  

 <Header as='h2' icon textAlign='center'>
    <Header.Content>Mechanics List</Header.Content>
    </Header>
  <Table striped>
    <Table.Header>
    
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Mobile Number</Table.HeaderCell>
        <Table.HeaderCell>Area</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Expert</Table.HeaderCell>
        <Table.HeaderCell>Active</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {
   
      data.map((item)=> 
      
      
      <Table.Row>
        
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.mobileNumber}</Table.Cell>
         <Table.Cell>{item.area}</Table.Cell>
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
    )
}