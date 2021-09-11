import { Container, Button } from './style';
import Modal from './../Modal';
import { formatDate } from './../../utils/utils.js';
import { useState } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

export default function Table({ data }) {
    const [dataModal, setDataModal] = useState({ active: false, item: null });

    return (
        <Container>
            <TableBootstrap striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (<tr key={index}>
                                <th>{item.name.first}</th>
                                <th>{item.gender}</th>
                                <th>{formatDate(item.dob.date)}</th>
                                <th>
                                    <Button onClick={() => setDataModal({ active: true, item: item })}>Details</Button>
                                </th>
                            </tr>)
                        })
                    }
                </tbody>
            </TableBootstrap>
            {dataModal.active && <Modal data={dataModal} setDataModal={setDataModal}/>}
        </Container>
    )
}