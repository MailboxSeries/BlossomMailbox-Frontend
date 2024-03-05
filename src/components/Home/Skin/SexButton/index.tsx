import Button from '@/components/common/Button';
import { SexButtonProps } from '@/interfaces/button';
import { sex } from '@/assets/skin';

export default function SexButton(props: SexButtonProps) {
  const backgroundImage = sex[props.selectedSex];

  return (
    <Button 
      width={120} 
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
