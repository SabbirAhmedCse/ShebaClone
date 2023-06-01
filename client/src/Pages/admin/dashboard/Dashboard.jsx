import React from 'react'
import { Segment,Grid,Card,Button,Container,Header } from 'semantic-ui-react'
//import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DashBoard() {
  return(
     <>
    <Container>
   <Header as='h2' icon textAlign='center'>
    <Header.Content >Dash Board</Header.Content>
    </Header>
 <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>
       <Card  >
  <Button >
    <Link to={'/Mechanics'}>
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
 
       <Card>
  <Button >
    <Link to={"/Services"}>
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
        <Card>
  <Button >
    <Link to={"/Customers"}>
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
        <Card>
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
  )
}
