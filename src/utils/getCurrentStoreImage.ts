import piano1 from '@/assets/store/piano1.png';
import piano2 from '@/assets/store/piano2.png';
import piano3 from '@/assets/store/piano3.png';
import piano4 from '@/assets/store/piano4.png';
import churros1 from '@/assets/store/churros1.png';
import churros2 from '@/assets/store/churros2.png';
import churros3 from '@/assets/store/churros3.png';
import churros4 from '@/assets/store/churros4.png';
import cottonCandy1 from '@/assets/store/cottonCandy1.png';
import cottonCandy2 from '@/assets/store/cottonCandy2.png';
import cottonCandy3 from '@/assets/store/cottonCandy3.png';
import cottonCandy4 from '@/assets/store/cottonCandy4.png';
import balloon1 from '@/assets/store/balloon1.png';
import balloon2 from '@/assets/store/balloon2.png';
import balloon3 from '@/assets/store/balloon3.png';
import balloon4 from '@/assets/store/balloon4.png';
import hotdog1 from '@/assets/store/hotdog1.png';
import hotdog2 from '@/assets/store/hotdog2.png';
import hotdog3 from '@/assets/store/hotdog3.png';
import hotdog4 from '@/assets/store/hotdog4.png';
import juice1 from '@/assets/store/juice1.png';
import juice2 from '@/assets/store/juice2.png';
import juice3 from '@/assets/store/juice3.png';
import juice4 from '@/assets/store/juice4.png';
import juice5 from '@/assets/store/juice5.png';
import popcorn1 from '@/assets/store/popcorn1.png';
import popcorn2 from '@/assets/store/popcorn2.png';
import popcorn3 from '@/assets/store/popcorn3.png';

// 이미지를 매핑하는 객체 생성
const rightStoreImages = {
    churros1, churros2, churros3, churros4,
    cottonCandy1, cottonCandy2, cottonCandy3, cottonCandy4,
    piano1, piano2, piano3, piano4
};

const leftStoreImages = {
    balloon1, balloon2, balloon3, balloon4,
    hotdog1, hotdog2, hotdog3, hotdog4,
    juice1, juice2, juice3, juice4, juice5,
    popcorn1, popcorn2, popcorn3
};

/** 오른쪽, 왼쪽 상점 이미지 반환하는 함수 */
export default function getCurrentStoreImage(rightStore?: string, leftStore?: string): { rightStoreImage: string, leftStoreImage: string } {
    // 기본 이미지 경로 설정
    let rightImage = rightStoreImages['piano4']; // rightStore 기본값
    let leftImage = leftStoreImages['juice2']; // leftStore 기본값

    // rightStore 이미지 경로 결정
    if (rightStore && rightStoreImages[rightStore]) {
        rightImage = rightStoreImages[rightStore];
    }

    // leftStore 이미지 경로 결정
    if (leftStore && leftStoreImages[leftStore]) {
        leftImage = leftStoreImages[leftStore];
    }

    // 두 이미지 경로를 객체로 반환
    return {
        rightStoreImage: rightImage,
        leftStoreImage: leftImage
    };
}
