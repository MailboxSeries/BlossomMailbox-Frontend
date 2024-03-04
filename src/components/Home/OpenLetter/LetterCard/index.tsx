import { ILetter } from '@/interfaces/letter';
import * as Styled from './style';

export default function LetterCard({
    reply,
    sender,
}: ILetter) {
    const isReply = reply && "[RE]"
    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.IsReply>{isReply}</Styled.IsReply>
                <Styled.Sender>{sender}</Styled.Sender>
            </Styled.Wrapper>
        </Styled.Container>
    );
}