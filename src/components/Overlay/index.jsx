import { Overlay as OverlayStyled, Text } from './style.js'

export default function OverLay( { text } )
{
    return (
        <OverlayStyled>
            <Text>{text}</Text>
        </OverlayStyled>
    )
}