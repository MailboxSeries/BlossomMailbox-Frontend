import NaverSignInButtonImg from '@/assets/Buttons/NaverSignInButton.svg';
import KakaoSignInButtonImg from '@/assets/Buttons/KakaoSignInButton.svg';
import GoogleSignInButtonImg from '@/assets/Buttons/GoogleSignInButton.svg';

export const useSocialSignInImage = (socialType: string) => {
    switch(socialType) {
        case "naver":
            return NaverSignInButtonImg;
        case "kakao":
            return KakaoSignInButtonImg;
        case "google":
            return GoogleSignInButtonImg;
        default:
            return undefined;
    }
};
