import Button from '@/components/common/Button';
import { ReplyButtonProps } from '@/interfaces/button';
import theme from '@/theme';

export default function ReplyButton(props: ReplyButtonProps) {

  return (
    <>
        <Button 
          width={55} 
          height={25} 
          color={theme.colors.white}
          backgroundColor={theme.colors.babyPink}
          fontSize={16}
          onClick={props.onClick}
          borderRadius='10px'
          position='absolute'
          top={"30px"}
          right={"30px"}
          zIndex={0}
          {...props}
        >
          {props.children}
        </Button>
    </>
  );
}
