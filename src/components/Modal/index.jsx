import { Modal as ModalBootstrap } from 'react-bootstrap';


import { Button, ContainerFlex, Input, W45, W100, Image } from './style'
export default function Modal({ data, setDataModal }) {
    const user = data.item;
    console.log(user);
    return (
        <ModalBootstrap show={data.active} size="lg">
            <ModalBootstrap.Body>
                <ContainerFlex>
                   <Image src={user.picture.medium} alt="" srcset="" />
                </ContainerFlex>
                <ContainerFlex>
                    <W45>
                        <label htmlFor="">Nome completo</label>
                        <Input disabled type="text" value={`${user.name.title} ${user.name.first} ${user.name.last}`} />
                    </W45>
                    <W45>
                        <label htmlFor="">Gênero</label>
                        <Input disabled type="text" value={user.gender} />
                    </W45>
                </ContainerFlex>
                <ContainerFlex>
                    <W100>
                        <label htmlFor="">Endereço</label>
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
                        <label htmlFor="">Data de nascimento</label>
                        <Input disabled type="text" value={user.dob.date} />
                    </W100>
                    <W100>
                        <label htmlFor="">Telefone</label>
                        <Input disabled type="text" value={user.phone} />
                    </W100>
                    <W100>
                        <label htmlFor="">Nacionalidade</label>
                        <Input disabled type="text" value={user.nat} />
                    </W100>
                </ContainerFlex>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer>
                <Button onClick={() => setDataModal({ active: false, item: null })}>Fechar</Button>
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}