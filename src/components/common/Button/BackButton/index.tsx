import Button from '@/components/common/Button';
import { BackButtonProps } from '@/interfaces/button';
import BackButtonImg from '@/assets/button/arrow-left.png';

export default function BackButton(props: BackButtonProps) {

  return (
    <Button 
      width={25} 
      height={25} 
      margin={"0px 0 0 0"} 
      background={BackButtonImg}
      fontSize={20}
      onClick={props.onClick}
      position='absolute'
      top={"30px"}
      left={"30px"}
      {...props}
    >
      {props.children}
    </Button>
  );
}
