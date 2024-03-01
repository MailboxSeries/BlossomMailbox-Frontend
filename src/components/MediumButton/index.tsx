import Button from '@/components/common/Button';
import { MediumButtonProps } from '@/interfaces/button';
import MediumButtonImg from '@/assets/button/button-med-default.png';
import theme from '@/theme';
export default function MediumButton(props: MediumButtonProps) {

  return (
    <Button 
      width={160} 
      height={40} 
      margin={"0px 0 0 0"} 
      background={MediumButtonImg}
      fontSize={20}
      color={theme.colors.white}
      onClick={props.onClick} 
      {...props}
    >
      {props.children}
    </Button>
  );
}
