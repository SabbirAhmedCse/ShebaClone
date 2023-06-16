import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Table, Button} from 'semantic-ui-react'
import commonDataAccess from '../dataAccess/CommonDataAccess'

export default function ServiceDetails() {

    const [data, setData] = useState([]);

    const nav = useNavigate();
    const location = useLocation();
    const {link} = location.state;

    useEffect(() => {
        commonDataAccess.get(link.url + '/' + link.id).then((response) => {
            setData(response);
        }).catch((error) => {
            console.error(error);
        });  
     }, []);

    return (
        <div className="contain">
            <div className="main">
                <h2>Service Details</h2>
            </div>
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={10}>
                            Service ID
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.id}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service CategoryID
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.servicesCategoryId}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service SubCategory
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.subCategory}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service Description
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            <div className='desc'>
                                {data.description}
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service Price
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.price} Tk.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service Image
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.imageUrl}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service CreatedAt
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.createAt}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service UpdatedAt
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.updateAt}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service IsActive
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.isActive ? 1 : 0}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Service IsDelete
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {data.isDelete ? 1 : 0}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button primary onClick={() => { nav('/Services') }}>Back to Lists</Button>
        </div>
    );
}