import Button from '@/components/common/Button';
import { SignoutButtonProps } from '@/interfaces/button';
import theme from '@/theme';

export default function SignoutButton(props: SignoutButtonProps) {
  return (
      <Button 
        width={40} 
        height={10}
        background='transparent'
        position='absolute'
        bottom='42px'
        right='42px'
        color={theme.colors.babyPink}
        fontSize={8}
        onClick={props.onClick}
        {...props}
      >
        {props.children}
        탈퇴하기
      </Button>
  );
}
