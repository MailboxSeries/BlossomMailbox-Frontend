import * as Style from './style';
import Layout from '@/components/common/Layout';
import getCurrentStoreImage from '@/utils/getCurrentStoreImage';

interface Props {
  rightStore?: string;
  leftStore?: string;
}

export default function StoreLayout({ rightStore, leftStore }: Props) {
  const { rightStoreImage, leftStoreImage } = getCurrentStoreImage(rightStore, leftStore);

  return (
    <Layout>
      {rightStoreImage && (
        <Style.StoreWrapper path={rightStoreImage} />
      )}
      {leftStoreImage && (
        <Style.StoreWrapper path={leftStoreImage} />
      )}
    </Layout>
  );
}