import Button from '@/components/Button';
import { LongButtonProps } from '@/interfaces/button';
import LongButtonImg from '@/assets/button/button-default.png';
export default function LongButton(props: LongButtonProps) {

  return (
    <Button width={250} height={40} margin={"8px 0 0 0"} background={LongButtonImg} onClick={props.onClick} {...props}>
      {props.children}
    </Button>
  );
}
