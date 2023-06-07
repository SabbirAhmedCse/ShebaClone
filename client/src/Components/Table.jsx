import {Table, Button} from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Actions from '../Components/Actions'

export default function CommonTable({data, Columns, actions, functions}){
    return (
        <Table singleLine fixed>
            <Table.Header>
                <Table.Row>
                    {
                        Columns.map((item, index) => {
                            return(<Table.HeaderCell key={index} textAlign='center'>{item.name}</Table.HeaderCell>)                   
                        })
                    }
                    <Table.HeaderCell colspan={actions.length} textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                  data && data.map((item) => {
                        if(item.isActive === true)
                        {
                            return(
                                <Table.Row key={item.id}>
                                    {
                                        Columns.map((idx, innderIndex) => {
                                            return (
                                                <Table.Cell key={innderIndex} textAlign='center'>
                                                    {item[idx.value]}
                                                </Table.Cell>
                                            )
                                        })
                                    }
                                    <div className='center'>
                                        <Actions id = {item.id} actions = {actions} functions={functions} />
                                        </div>
                                </Table.Row>
                            )   
                        }
                    })
                }
            </Table.Body>
        </Table>
    );
}