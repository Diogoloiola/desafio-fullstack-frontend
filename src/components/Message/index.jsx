import { Container } from './style';

export default function Message({ text }) {
    return (
        <Container>
            <p>
                {text}
            </p>
        </Container>
    )
}