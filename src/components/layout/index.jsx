import { Container } from './style'
import Header from './../Header';
import DetailsUser from './../DetailsUser';

export default function Layout(){
    return(
       <Container>
            <Header />
           <DetailsUser />
           {/*<Main>
                <Description />
                <Input />
               <Table />
           </Main> */}
       </Container>
    )
}
