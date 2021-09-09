import { Container, Button } from './style';
import Modal from './../Modal';
import { useState } from 'react';

export default function Table({ data }) {
    const [dataModal, setDataModal] = useState({ active: false, item: null });

    return (
        <Container>
            <table>
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
                                <th>{item.dob.date}</th>
                                <th>
                                    <Button onClick={() => setDataModal({ active: true, item: item })}>Details</Button>
                                </th>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            {dataModal.active && <Modal data={dataModal.item} setDataModal={setDataModal}/>}
            {/* <Modal data={dataModal.item} setDataModal={setDataModal}/> */}
        </Container>
    )
}