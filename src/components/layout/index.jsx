import { Container, Main } from './style'
import Header from './../Header';
import DetailsUser from './../DetailsUser';
import Message from './../Message';
import Form from './../Form';
import Table from './../Table';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
      async function getData() {
        const result = await axios.get("https://randomuser.me/api/?results=50");
        setUsers(result.data["results"]);
      }
      getData();
    }, []);

    return (
        <Container>
            <Header />
            <DetailsUser />
            <Main>
                <Message text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"} />
                <Form />
                <Table data={users} />
            </Main>
        </Container>
    )
}
