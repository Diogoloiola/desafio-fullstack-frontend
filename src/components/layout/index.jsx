import { Container, Pagination } from './style'

import Header from './../Header';
import DetailsUser from './../DetailsUser';
import Message from './../Message';
import Form from './../Form';
import Table from './../Table';
import UserDetails from './../UserDetails';
import Overlay from './../Overlay'
import RandomUserApi from './../../models/random-user.js'

import { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container as Main } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { URL_API, TOKEN } from './../../utils/utils.js'

export default function Layout() {

  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(true)
  const randomUser = new RandomUserApi(axios, URL_API, TOKEN)

  useEffect(() => {
    async function getData() {
      const result = await randomUser.getAll()
      setUsers(result['body'])
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
              <Table data={users} randomUser={randomUser} setUsers={setUsers} />
              <Pagination>
                <button>Previous</button>
                <button>Next</button>
              </Pagination>
            </Main>
          </Container>
          {isVisible && <Overlay text={'Carregando'} />}
        </>
      )} />

      <Route path="/:uuid" exact component={() => <UserDetails data={users} />} />
    </Router>
  )
}
