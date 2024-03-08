import Button from '@/components/common/Button';
import { LongButtonProps } from '@/interfaces/button';
import LongButtonImg from '@/assets/button/button-default.png';
import theme from '@/theme';
export default function LongButton(props: LongButtonProps) {

  return (
    <Button 
      width={250} 
      height={40} 
      margin={"8px 0 0 0"} 
      background={LongButtonImg}
      fontSize={20}
      color={theme.colors.white}
      onClick={props.onClick} 
      {...props}
    >
      {props.children}
    </Button>
  );
}
