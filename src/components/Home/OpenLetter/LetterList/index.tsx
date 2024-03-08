import LetterCard from '@/components/Home/OpenLetter/LetterCard';
import * as Styled from './style';
import { ILetterList } from '@/interfaces/letter';
import useModal from '@/hooks/useModal';
import LetterReadModal from '@/components/Home/OpenLetter/LetterReadModal';
import { useState } from 'react';

export default function LetterList({ data }: { data?: ILetterList }) {
    const { isOpenModal: isOpenDayLetterListModal, closeModal: closeDayLetterListModal } = useModal('DayLetterListModal');
    const { isOpenModal: isOpenLetterReadModal, openModal: openLetterReadModal, closeModal: closeLetterReadModal } = useModal('LetterReadModal');
    const [cafeId, setCafeId] = useState<number>(0);

    const handleLetterModalOpen = (id: number) => {
        openLetterReadModal();
        //closeDayLetterListModal();
        setCafeId(id);
    }

    return (
        <>
            <Styled.Container>
                {data.letters.length === 0 ? (
                    <Styled.Text>받은 편지가 없어요.</Styled.Text>
                ) : (
                    data.letters.map((letter) => {
                    return (
                        <Styled.Wrapper
                        key={letter.id}
                        onClick={() => handleLetterModalOpen(letter.id)}
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

            <LetterReadModal 
                onClose={closeLetterReadModal}
                isOpen={isOpenLetterReadModal}
                id={cafeId}
            />
        </>
    );
}
