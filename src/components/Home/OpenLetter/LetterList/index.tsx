import LetterCard from '@/components/Home/OpenLetter/LetterCard';
import * as Styled from './style';
import { ILetterList } from '@/interfaces/letter';
import useModal from '@/hooks/useModal';
import LetterReadModal from '@/components/Home/OpenLetter/LetterReadModal';
import { useState } from 'react';

export default function LetterList({ data }: { data?: ILetterList }) {
    const { isOpenModal: isOpenDayLetterListModal, closeModal: closeDayLetterListModal } = useModal('DayLetterListModal');
    const { isOpenModal: isOpenLetterReadModal, openModal: openLetterReadModal, closeModal: closeLetterReadModal } = useModal('LetterReadModal');
    const [letterId, setLetterId] = useState<number | null>(null);

    const handleLetterModalOpen = (id: number) => {
        openLetterReadModal();
        //closeDayLetterListModal();
        setLetterId(id);
    }

    return (
        <>
            <Styled.Container>
                {data.letters.map((letter) => {
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
                }
            </Styled.Container>

        {letterId && 
            <LetterReadModal 
                onClose={closeLetterReadModal}
                isOpen={isOpenLetterReadModal}
                id={letterId}
            />
        }
        </>
    );
}
