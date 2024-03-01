import NaverSignInButtonImg from '@/assets/socialButton/NaverSignInButton.svg';
import KakaoSignInButtonImg from '@/assets/socialButton/KakaoSignInButton.svg';
import GoogleSignInButtonImg from '@/assets/socialButton/GoogleSignInButton.svg';

/** 로그인 버튼 이미지 반환하는 함수 */
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
