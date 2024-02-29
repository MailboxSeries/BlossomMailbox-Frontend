import NaverSignInButtonImg from '@/assets/socialButton/NaverSignInButton.svg';
import KakaoSignInButtonImg from '@/assets/socialButton/KakaoSignInButton.svg';
import GoogleSignInButtonImg from '@/assets/socialButton/GoogleSignInButton.svg';

export const getSocialSignInImage = (socialType: string) => {
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
