import Button from '@/components/common/Button';
import { AttendButtonProps } from '@/interfaces/button';
import AttendButtonImg from '@/assets/button/eventBtn.png';
import useIsMyHome from '@/hooks/useIsMyHome';

export default function AttendButton(props: AttendButtonProps) {
  const { isMyHome } = useIsMyHome();

  return (
    <>
      {isMyHome && (
        <>
          <Button 
          width={55} 
          height={55} 
          margin={"0px 0 0 0"} 
          background={AttendButtonImg}
          fontSize={20}
          onClick={props.onClick}
          position='absolute'
          top={"12px"}
          right={"80px"}
          {...props}
        >
          {props.children}
        </Button>
        {/* <Styled.GlowContainer /> */}
      </>
      )}
    </>
  );
}
