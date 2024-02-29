import Sky1 from '@/assets/background/sky1.png';
import Sky2 from '@/assets/background/sky2.png';
import Sky3 from '@/assets/background/sky3.png';

export default function getCurrentSkyImage() {
    // 현재 시간 가져오기
    const now = new Date();
    const hour = now.getHours();

    // 시간대에 따른 이미지 경로 결정
    let imagePath = '';

    if (hour >= 7 && hour < 17) {
        imagePath = Sky1;
    } else if (hour >= 17 && hour < 19) {
        imagePath = Sky2;
    } else if (hour >= 19 || hour < 5) {
        imagePath = Sky3;
    } else if (hour >= 5 && hour < 7) {
        imagePath = Sky2;
    }

    return imagePath;
}