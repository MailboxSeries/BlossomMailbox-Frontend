import AnimalButton from '@/components/\bAnimalButton';
import CharacterLayout from '@/components/CharacterLayout';
import PageLayout from '@/components/PageLayout';
import StoreLayout from '@/components/StoreLayout';

export default function Home() {
  
  return (
    <>
      <PageLayout>
        <StoreLayout /> {/* TODO: rightStore, leftStore 서버로 부터 받은 값 넘겨야함 */}
        <CharacterLayout /> {/* TODO: sex, hair, face, top, bottom 서버로 부터 받은 값 넘겨야함 */}
        <AnimalButton /> {/* TODO: animal 서버로 부터 받은 값 넘겨야함 */}
      </PageLayout>
    </>
  );
}
