import Button from '@/components/common/Button';
import { ShortButtonProps } from '@/interfaces/button';
import ShortButtonImg from '@/assets/button/button-small.png';
import theme from '@/theme';
export default function ShortButton(props: ShortButtonProps) {

  return (
    <Button 
      width={85} 
      height={40} 
      margin={"0px 0 0 0"} 
      background={ShortButtonImg}
      fontSize={20}
      color={theme.colors.white}
      onClick={props.onClick} 
      {...props}
    >
      {props.children}
    </Button>
  );
}
