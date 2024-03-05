import LetterCard from '@/components/Home/OpenLetter/LetterCard';
import * as Styled from './style';
import { ILetterList } from '@/interfaces/letter';
import useModal from '@/hooks/useModal';
import LetterModal from '@/components/Home/OpenLetter/LetterModal';
import { useState } from 'react';

export default function LetterList({ data }: { data?: ILetterList }) {
    const { isOpenModal: isDayLetterListModal, closeModal: closeDayLetterListModal } = useModal('DayLetterListModal');
    const { isOpenModal: isOpenLetterModal, openModal: openLetterModal, closeModal: closeLetterModal } = useModal('LetterModal');
    const [cafeId, setCafeId] = useState<number>(0);

    const handleLetterModalOpen = (id: number) => {
        openLetterModal();
        //closeDayLetterListModal();
        setCafeId(id);
        console.log('openLetterModal',openLetterModal);
        console.log('isOpenLetterModal',isOpenLetterModal);

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

            <LetterModal 
                onClose={closeLetterModal}
                isOpen={isOpenLetterModal}
                id={cafeId}
            />
        </>
    );
}
