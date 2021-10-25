import { Container } from './style'

import Header from './../Header';
import DetailsUser from './../DetailsUser';
import Message from './../Message';
import Form from './../Form';
import Table from './../Table';
import UserDetails from './../UserDetails';
import Overlay from './../Overlay'

import { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container as Main } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Layout() {

  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    async function getData() {
      const result = await axios.get("https://randomuser.me/api/?results=50&seed=foobar");
      setUsers(result.data["results"]);
      setIsVisible(false)
    }
    getData();
  }, []);

  return (
    <Router>
      <Route path="/" exact render={() => (
        <>
          <Container>
            <Header />
            <DetailsUser />
            <Main>
              <Message text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"} />
              <Form />
              <Table data={users} />
            </Main>
          </Container>
          {isVisible && <Overlay text={'Carregando'}/> }
        </>
      )} />

      <Route path="/:uuid" exact component={() => <UserDetails data={users}/>  } />
    </Router>
  )
}
