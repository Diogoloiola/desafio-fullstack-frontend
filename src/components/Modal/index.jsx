import { Modal as ModalBootstrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDate } from './../../utils/utils.js';

import { Button, ContainerFlex, Input, W45, W100, Image, ContainerLink } from './style'


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
    return (
        <ModalBootstrap show={data.active} size="lg">
            <ModalBootstrap.Body>
                <ContainerFlex>
                    <Image src={user.picture.medium} alt="" srcset="" />
                </ContainerFlex>
                <ContainerFlex>
                    <W45>
                        <label htmlFor="">Full name</label>
                        <Input disabled type="text" value={`${user.name.title} ${user.name.first} ${user.name.last}`} />
                    </W45>
                    <W45>
                        <label htmlFor="">Genre</label>
                        <Input disabled type="text" value={user.gender} />
                    </W45>
                </ContainerFlex>
                <ContainerFlex>
                    <W100>
                        <label htmlFor="">Address</label>
                        <Input disabled type="text" value={user.location.street.name} />
                    </W100>
                </ContainerFlex>
                <ContainerFlex>
                    <W100>
                        <label htmlFor="">Email</label>
                        <Input disabled type="text" value={user.email} />
                    </W100>
                </ContainerFlex>
                <ContainerFlex>
                    <W100>
                        <label htmlFor="">Date of birth</label>
                        <Input disabled type="text" value={formatDate(user.dob.date)} />
                    </W100>
                    <W100>
                        <label htmlFor="">Phone</label>
                        <Input disabled type="text" value={user.phone} />
                    </W100>
                    <W100>
                        <label htmlFor="">Nationality</label>
                        <Input disabled type="text" value={user.nat} />
                    </W100>
                </ContainerFlex>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer>
                {getFooterModal(data.type, user.login.uuid, setDataModal)}
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}