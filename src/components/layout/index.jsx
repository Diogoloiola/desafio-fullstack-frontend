import { Container, Main } from './style'
import Header from './../Header';
import DetailsUser from './../DetailsUser';
import Message from './../Message';
import Form from './../Form';

export default function Layout(){
    return(
       <Container>
            <Header />
           <DetailsUser />
           <Main>
                <Message text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"} />
                <Form />
                {/*<Table /> */}
           </Main>
       </Container>
    )
}
