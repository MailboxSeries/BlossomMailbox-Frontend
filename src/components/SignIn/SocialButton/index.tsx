import Button from '@/components/common/Button';
import useToast from '@/hooks/useToast';
import { SocialButtonProps } from '@/interfaces/button';
import { getSocialSignInImage } from '@/utils/getSocialSignInImage';

export default function SocialButton(props: SocialButtonProps) {
  const socialImg = getSocialSignInImage(props.socialType);
  const { displayToast } = useToast();

  const handleSignIn = () => {
    window.location.href = `https://api.blossommailbox.com/oauth2/authorization/${props.socialType}`;
  };

  return (
    <Button width={250} height={40} margin={"8px 0 0 0"} background={socialImg} onClick={handleSignIn} {...props}>
      {props.children}
    </Button>
  );
}
