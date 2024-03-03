import Button from '@/components/common/Button';
import { SexButtonProps } from '@/interfaces/button';
import { sex } from '@/assets/character';

export default function SexButton(props: SexButtonProps) {
  const backgroundImage = sex[props.selectedSex].imgSrc;

  return (
    <Button 
      width={60} 
      height={120} 
      margin={"0px 0 0 0"} 
      background={backgroundImage}
      onClick={props.onClick} 
      {...props}
    >
      {props.children}
    </Button>
  );
}
