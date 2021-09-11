import Modal from './../Modal';
import { useState } from 'react';
import { useParams } from 'react-router';

function getUser(users, uuid) {
    if (users !== undefined) {
        return users.filter(user => user.login.uuid === uuid)[0];
    }
    return null;
}

export default function UserDetails({ data }) {
    const { uuid } = useParams();
    const user = getUser(data, uuid);
    const [dataModal, setDataModal] = useState({ active: true, item: user, type: 1 });
    return (
        <>
            {user && <Modal data={dataModal} setDataModal={setDataModal} />}
        </>
    )
}