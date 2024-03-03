import Button from '@/components/common/Button';
import { AnimalButtonProps } from '@/interfaces/button';
import { getCurrentAnimalImage } from '@/utils/getCurrentAnimalImage';
import * as Styled from './styled';
import useIsMyHome from '@/hooks/useIsMyHome';

export default function AnimalButton(props: AnimalButtonProps) {
  const { animalImage } = getCurrentAnimalImage(props.animal);
  const { isMyHome } = useIsMyHome();

  return (
    <Styled.Wrapper>
      {isMyHome && <Styled.SpeechBubble />}
      <Button 
        width={80} 
        height={80} 
        margin={"321px 80px 0 0"} 
        background={animalImage}
        onClick={props.onClick}
        position='relative'
        {...props}
      >
        {props.children}
      </Button>
    </Styled.Wrapper>
  );
}
