import React from 'react'
import { Segment,Grid,Card,Button,Container } from 'semantic-ui-react'
//import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





export default function DashBoard() {

   // const nav = useNavigate();
  
   return <>
 <Container>
 <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>
        <Card>
  <Button >
    <Link to={"./MechanicListWithSearch"}>
   Mechanic List
  </Link>
  </Button>
  </Card>
  
        </Segment>
      </Grid.Column>
     
     
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment>
 
       <Card alignment
    
    header='Mechanic List'
    meta='List'
   
  >
  <Button >
    <Link to={"./ServicesList"}>
   Services List
  </Link>
  </Button>
  </Card>
       
  
        </Segment>
      </Grid.Column>
     
     
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>
        <Card
    
    header='Services List'
    meta='List'
   
  >
  <Button >
    <Link to={"./CustomerList"}>
   Customer List
  </Link>
  </Button>
  </Card>
  
        </Segment>
      </Grid.Column>
     
     
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>
        <Card
    
    header='Mechanic List'
    meta='List'
   
  >
  <Button >
    <Link to={"./ServiceRequestList"}>
   Services Request List
  </Link>
  </Button>
  </Card>
  
        </Segment>
      </Grid.Column>
     
     
    </Grid.Row>
    
  </Grid>
 </Container>
</>
}
