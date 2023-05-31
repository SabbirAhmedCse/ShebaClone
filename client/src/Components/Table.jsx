import {Table, Button} from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import commonDataAccess from '../DataAccess/CommonDataAccess'
import Actions from '../Components/Actions'

export default function CommonTable({url, headers, dbData, options}){

    const [data, setData] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
         dataAccess.get(url).then((data) =>
         setData(data)); 
      }, []);

    return (
        <Table singleLine fixed>
            <Table.Header>
                <Table.Row>
                    {
                        headers.map((item, index) => {
                            return(<Table.HeaderCell key={index} textAlign='center'>{item}</Table.HeaderCell>)                   
                        })
                    }
                    <Table.HeaderCell colspan={options} textAlign='center'>Actions</Table.HeaderCell>
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
                                    <Actions key={item.id} url = {url} Id = {item.id} options = {options} />
                                    </div>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    );
}