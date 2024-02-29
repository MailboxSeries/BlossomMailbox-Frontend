import Button from '@/components/common/Button';
import { AnimalButtonProps } from '@/interfaces/button';
import { getCurrentAnimalImage } from '@/utils/getCurrentAnimalImage';

export default function AnimalButton(props: AnimalButtonProps) {
  const { animalImage } = getCurrentAnimalImage(props.animal);

  return (
      <Button 
        width={80} 
        height={80} 
        margin={"318px 80px 0 0"} 
        background={animalImage}
        onClick={props.onClick}
        position='relative'
        {...props}
      >
        {props.children}
      </Button>
  );
}
