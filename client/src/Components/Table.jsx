import {Table, Button} from 'semantic-ui-react'

export default function CommonTable({data, headers, dbData}){


    return (
        <Table singleLine fixed>
            <Table.Header>
                <Table.Row>
                    {
                        headers.map((item) => {
                            return(<Table.HeaderCell textAlign='center'>{item}</Table.HeaderCell>)                   
                        })
                    }
                    <Table.HeaderCell colspan='3' textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data.map((item) => {
                        return(
                            <Table.Row>
                                {
                                    dbData.map((idx) => {
                                        return (
                                            <Table.Cell textAlign='center'>{item[idx]}</Table.Cell>
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