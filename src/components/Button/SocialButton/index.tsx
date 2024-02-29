import Button from '@/components/Button';
import { SocialButtonProps } from '@/interfaces/button';
import { useSocialSignInImage } from '@/hooks/useSocialSignInImage';

export default function SocialButton(props: SocialButtonProps) {
  const socialImg = useSocialSignInImage(props.socialType);

  const handleSignIn = () => {
    window.location.href = `https://blossommailbox.com/oauth2/authorization/${props.socialType}`;
  };

  return (
    <Button width={250} height={40} margin={"8px 0 0 0"} background={socialImg} onClick={handleSignIn} {...props}>
      {props.children}
    </Button>
  );
}
