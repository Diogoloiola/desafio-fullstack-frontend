import { useState } from 'react';
import { Modal as ModalBootstrap, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Button, Image, ContainerLink } from './style'


function getFooterModal(type, uuid, setDataModal) {
    if (type === 1) {
        return (<ContainerLink>
            <Link className="link" to={`/`}>Back</Link>
        </ContainerLink>)

    } else {
        return (<>
            <ContainerLink>
                <Link className="link" to={`/${uuid}`}>Share</Link>
            </ContainerLink>
            <Button onClick={() => setDataModal({ active: false, item: null })}>Close</Button>
        </>)
    }
}

export default function Modal({ data, setDataModal }) {
    const user = data.item;

    const [name, setName] = useState(`${user.name.title} ${user.name.first}`)
    const [gender, setGender] = useState(user.gender)
    const [street, setStreet] = useState(user.location.street.name)
    const [email, setEmail] = useState(user.email)
    const [birthDay, setBirthDay] = useState(user.dob.date)
    const [phone, setPhone] = useState(user.phone)
    const [nationality, setNationality] = useState(user.nat)

    return (
        <ModalBootstrap show={data.active} size={"lg"}>
            <ModalBootstrap.Header>
                <Image src={user.picture.medium} alt="" srcset="" />
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Full name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Gender"
                                    value={gender}
                                    onChange={e => setGender(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Street</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Street"
                                    value={street}
                                    onChange={e => setStreet(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Birth day</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    value={birthDay}
                                    onChange={e => setBirthDay(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Uuid</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="uuid"
                                    value={user.login.uuid}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="nationality"
                                    value={nationality}
                                    onChange={e => setNationality(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer>
                {getFooterModal(data.type, user.login.uuid, setDataModal)}
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}