import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Table, Button} from 'semantic-ui-react'
import commonDataAccess from '../dataAccess/CommonDataAccess'

const baseURL = 'https://localhost:7194/api/User?Id=';
export default function MechanicDetails() {

    const [data, setData] = useState([]);

    const nav = useNavigate();
    const location = useLocation();
    const {link} = location.state;

    useEffect(() => {
        commonDataAccess.get(baseURL+ link.id).then((response) => {
            setData(response);
        }).catch((error) => {
            console.error(error);
        });  
     }, []);

    return (
        <div className="contain">
            <div className="main">
                <h2>Mechanic Details</h2>
            </div>
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={10}>
                            Mechanic ID
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.id}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Name
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.name}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                           Email
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.email}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                          Mobile Number
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.mobileNumber}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                          Gender
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.gender}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                          Date Of Birth
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.dateOfBirth}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                           City
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.city}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                           Area
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.area}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                          Address
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.address}
                        </Table.Cell>
                    </Table.Row>
                     <Table.Row>
                        <Table.Cell>
                          ISActive
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                           {data.isActive ? "Active": "Inactive"}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button primary onClick={() => { nav('/Mechanics') }}>Back to Lists</Button>
        </div>
    );
}