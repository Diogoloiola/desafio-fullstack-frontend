import { Container, Button, TableRow } from './style';
import Modal from './../Modal';
import { useState } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

export default function Table({ data, randomUser, setUsers }) {
    const [dataModal, setDataModal] = useState({ active: false, item: null });
    const [query, setQuery] = useState('-');
    function filterTable(e) {
        const { value } = e.target
        setQuery(value);
    }

    const deleteUser = async (id) => {
        const result = await randomUser.deleteUser(id)
        if (result.status) {
            alert(result.body)
            const data = await randomUser.getAll()
            setUsers(data['body'])
        } else {
            alert(result.body)
        }
    }

    return (
        <Container>
            <TableBootstrap bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <select name="" id="" onChange={filterTable}>
                                <option value="-">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </th>
                        <th>Birth</th>
                        <th style={{width: '300px'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (<TableRow key={index} gender={item.gender} filter={query}>
                                <td>{item.name.first}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob.date}</td>
                                <td style={{display: 'flex', width: '300px', justifyContent: 'flex-start'}}>
                                    <Button color={'primary'}
                                        onClick={
                                            () => setDataModal({ active: true, item: item, randomUser: randomUser })}>
                                        Details
                                    </Button>
                                    <Button
                                        onClick={
                                            () => deleteUser(item.login.uuid)}>
                                        Delete User
                                    </Button>
                                </td>
                            </TableRow>)
                        })
                    }
                </tbody>
            </TableBootstrap>
            {dataModal.active && <Modal 
                data={dataModal} 
                setDataModal={setDataModal} 
                randomUser={randomUser}
                setUsers={setUsers}
             />}
        </Container>
    )
}