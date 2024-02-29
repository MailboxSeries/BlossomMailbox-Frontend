import PageLayout from '@/components/PageLayout';
import StoreLayout from '@/components/StoreLayout';

export default function Home() {
  
  return (
    <>
      <PageLayout>
        <StoreLayout /> {/* TODO: rightStore, leftStore 서버로 부터 받은 값 넘겨야함 */}
      </PageLayout>
    </>
  );
}
