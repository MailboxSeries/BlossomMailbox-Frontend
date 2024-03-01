import AnimalButton from '@/components/\bAnimalButton';
import CharacterLayout from '@/components/CharacterLayout';
import PageLayout from '@/components/PageLayout';
import StoreLayout from '@/components/StoreLayout';
import * as Styled from './style';
import MediumButton from '@/components/MediumButton';
import ShortButton from '@/components/ShortButton';
import ShareButton from '@/components/Home/LongButton';

export default function Home() {
  const nowDate = 3; // TODO: 서버로 부터 받은 값으로 변경. 이건 임시 값

  const handleOpenLetter = () => {
    // Add your logic here
  };

  return (
    <>
      <PageLayout>
        <StoreLayout /> {/* TODO: rightStore, leftStore 서버로 부터 받은 값 넘겨야함 */}
        <CharacterLayout /> {/* TODO: sex, hair, face, top, bottom 서버로 부터 받은 값 넘겨야함 */}
        <AnimalButton /> {/* TODO: animal 서버로 부터 받은 값 넘겨야함 */}
        <Styled.ButtonWrapper>
          <Styled.RowContainer>
            <MediumButton onClick={() => handleOpenLetter()}>
              편지 보기
            </MediumButton>
            <ShortButton>
              D-{35-nowDate}
            </ShortButton>
          </Styled.RowContainer>
          <ShareButton />
        </Styled.ButtonWrapper>
      </PageLayout>
    </>
  );
}
