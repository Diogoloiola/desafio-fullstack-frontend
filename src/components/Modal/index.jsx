import { Container, Content, Button, ContainerFlex, Input, W45, W100,Image } from './style'
export default function Modal({ data, setDataModal }) {
    return (
        <Container>
            <Content>
                <div className="content-header">
                    <ContainerFlex>
                        <div>
                            <h1>Id: {data.login.uuid}</h1>
                        </div>
                        <Image src={data.picture.large} alt="" srcset="" />
                        <div>
                            <a href="">Link para compartilhamento</a>
                        </div>
                    </ContainerFlex>
                </div>
                <div className="content-body">
                    <ContainerFlex>
                        <W45>
                            <label htmlFor="">Nome completo</label>
                            <Input disabled type="text" value={`${data.name.title} ${data.name.first} ${data.name.last}`} />
                        </W45>
                        <W45>
                            <label htmlFor="">Gênero</label>
                            <Input disabled type="text" value={data.gender} />
                        </W45>
                    </ContainerFlex>
                    <ContainerFlex>
                        <W100>
                            <label htmlFor="">Endereço</label>
                            <Input disabled type="text" value={data.location.street.name} />
                        </W100>
                    </ContainerFlex>
                    <ContainerFlex>
                        <W100>
                            <label htmlFor="">Email</label>
                            <Input disabled type="text" value={data.email} />
                        </W100>
                    </ContainerFlex>
                    <ContainerFlex>
                        <div>
                            <label htmlFor="">Data de nascimento</label>
                            <Input disabled type="text" value={data.dob.date} />
                        </div>
                        <div>
                            <label htmlFor="">Telefone</label>
                            <Input disabled type="text" value={data.phone} />
                        </div>
                        <div>
                            <label htmlFor="">Nacionalidade</label>
                            <Input disabled type="text" value={data.nat} />
                        </div>
                    </ContainerFlex>

                </div>
                <div className="content-footer">
                    <Button onClick={() => setDataModal({ active: false, item: null })}>Fechar</Button>
                </div>
            </Content>
        </Container>
    )
}