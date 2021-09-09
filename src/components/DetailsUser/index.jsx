import { Container, Icon } from './style'
import { FaFacebookF, FaUserAlt } from "react-icons/fa";

export default function DetailsUser() {
    return (
        <Container>
            <div>
                <Icon>
                    <FaFacebookF />
                </Icon>
                Company
            </div>
            <div>
                <Icon>
                    <FaUserAlt />
                </Icon>
                User
            </div>
        </Container>
    )
}