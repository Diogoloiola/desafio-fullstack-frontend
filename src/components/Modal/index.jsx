import { useState } from 'react';
import { Modal as ModalBootstrap, Container, Row, Col, Form } from 'react-bootstrap';
import { Button, Image } from './style'
import ValidateForm from './../../utils/formValidate.js'


export default function Modal({ data, setDataModal, randomUser, setUsers }) {
    const user = data.item;

    const [name, setName] = useState(`${user.name.first} ${user.name.last}`)
    const [gender, setGender] = useState(user.gender)
    const [street, setStreet] = useState(user.location.street)
    const [email, setEmail] = useState(user.email)
    const [birthDay, setBirthDay] = useState(user.dob.date)
    const [phone, setPhone] = useState(user.phone)
    const [nationality, setNationality] = useState(user.nat)

    const updateUser = async (id) => {
        const payload = {
            "first_name": name.split(' ')[0],
            "last_name": name.split(' ')[1],
            "email": email,
            "birth_date": birthDay,
            "gender": gender,
            "phone": phone,
            "nationality": nationality,
            "street": street
        }
        const validateForm = new ValidateForm(payload)
        const result = validateForm.validate()
        if (result === true) {
            const result = await randomUser.updateUser(payload, id)
            if (result) {
                const data = await randomUser.getAll()
                setUsers(data['body'])
                alert('User data updated successfully')
            }else{
                alert('Something went wrong, please try again later')
            }
        } else {
            alert(result)
        }

    }

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
                                    type="email"
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
                                    type="date"
                                    placeholder="Birth day"
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
                <Button onClick={
                    () => setDataModal({ active: false, item: null, randomUser: randomUser })
                }
                >Close</Button>
                <Button color={'#007bff'} onClick={() => {
                    updateUser(user.login.uuid)
                }}>Update user</Button>
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}