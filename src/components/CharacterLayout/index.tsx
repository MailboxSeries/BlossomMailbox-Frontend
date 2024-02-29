import * as Style from './style';
import Layout from '@/components/common/Layout';
import getCurrentCharacterImage from '@/utils/getCurrentCharacterImage';

interface Props {
  sex?: string;
  hair?: number;
  face?: number;
  top?: number;
  bottom?: number;
}

export default function CharacterLayout({ sex, hair, face, top, bottom }: Props) {
  const { sexImage, hairImage, faceImage, topImage, bottomImage } = getCurrentCharacterImage(sex, hair, face, top, bottom);

  return (
    <Layout>
      {sexImage && (
        <Style.CharacterWrapper path={sexImage} />
      )}
      {hairImage && (
        <Style.CharacterWrapper path={hairImage} />
      )}
      {faceImage && (
        <Style.CharacterWrapper path={faceImage} />
      )}
      {topImage && (
        <Style.CharacterWrapper path={topImage} />
      )}
      {bottomImage && (
        <Style.CharacterWrapper path={bottomImage} />
      )}
    </Layout>
  );
}