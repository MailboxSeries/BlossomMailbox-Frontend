import LetterCard from '@/components/Home/OpenLetter/LetterCard';
import * as Styled from './style';
import { ILetterList } from '@/interfaces/letter';

export default function LetterList({ data }: { data?: ILetterList }) {

    const handleLetterModalOpen = () => {

    }

    return (
        <>
            <Styled.Container>
                {data?.letters.length === 0 ? (
                    <Styled.Text>받은 편지가 없어요.</Styled.Text>
                ) : (
                    data?.letters.map((letter) => {
                    return (
                        <Styled.Wrapper
                        key={letter.id}
                        onClick={() => handleLetterModalOpen()}
                        >
                            <LetterCard
                                id={letter.id}
                                reply={letter.reply}
                                sender={letter.sender}
                            />
                        </Styled.Wrapper>
                    );
                    })
                )}
            </Styled.Container>
        </>
    );
}
