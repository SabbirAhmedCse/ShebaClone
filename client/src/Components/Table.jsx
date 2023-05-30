import {Table} from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import commonDataAccess from '../DataAccess/CommonDataAccess'
import Actions from '../Components/Actions'

export default function CommonTable({url, headers, dbData, options}){

    const [data, setData] = useState([]);
    useEffect(() => {
         commonDataAccess.get(url).then((data) =>
         setData(data)); 
      }, []);

export default function CommonTable({data, headers, dbData}){


    return (
        <Table singleLine fixed>
            <Table.Header>
                <Table.Row>
                    {
                        headers.map((item, index) => {
                            return(<Table.HeaderCell key={index} textAlign='center'>{item}</Table.HeaderCell>)                   
                        })
                    }
                    <Table.HeaderCell colspan='3' textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                  data.map((item) => {
                        return(
                            <Table.Row key={item.id}>
                                {
                                    dbData.map((idx, innderIndex) => {
                                        return (
                                            <Table.Cell key={innderIndex} textAlign='center'>
                                                {item[idx]}
                                            </Table.Cell>
                                        )
                                    })
                                }
                                <div className='center'>
                                    <Button type='submit'>Details</Button> <Button type='submit'>Update</Button> <Button type='submit'>Delete</Button>
                                    </div>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    );
}