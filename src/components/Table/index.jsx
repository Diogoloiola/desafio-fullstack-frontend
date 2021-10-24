import { Container, Button, TableRow } from './style';
import Modal from './../Modal';
import { formatDate } from './../../utils/utils.js';
import { useState } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

export default function Table({ data }) {
    const [dataModal, setDataModal] = useState({ active: false, item: null });
    const [query, setQuery] = useState('-');
    function filterTable(e) {
        const { value } = e.target
        setQuery(value);
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (<TableRow key={index} gender={item.gender} filter={query}>
                                <td>{item.name.first}</td>
                                <td>{item.gender}</td>
                                <td>{formatDate(item.dob.date)}</td>
                                <td>
                                    <Button teste={'ola'} onClick={() => setDataModal({ active: true, item: item })}>Details</Button>
                                </td>
                            </TableRow>)
                        })
                    }
                </tbody>
            </TableBootstrap>
            {dataModal.active && <Modal data={dataModal} setDataModal={setDataModal} />}
        </Container>
    )
}