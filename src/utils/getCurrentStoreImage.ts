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
const leftStoreImages = {
    1: churros1, 
    2: churros2, 
    3: churros3, 
    4: churros4,
    5: cottonCandy1, 
    6: cottonCandy2, 
    7: cottonCandy3, 
    8: cottonCandy4,
    9: piano1, 
    10: piano2, 
    11: piano3, 
    12: piano4
};

const rightStoreImages = {
    1: balloon1, 
    2: balloon2, 
    3: balloon3, 
    4: balloon4,
    5: hotdog1, 
    6: hotdog2, 
    7: hotdog3, 
    8: hotdog4,
    9: juice1, 
    10: juice2, 
    11: juice3, 
    12: juice4, 
    13: juice5,
    14: popcorn1, 
    15: popcorn2, 
    16: popcorn3
};

/** 오른쪽, 왼쪽 상점 이미지 반환하는 함수 */
export default function getCurrentStoreImage(rightStore?: number, leftStore?: number): { rightStoreImage: string, leftStoreImage: string } {
    // 기본 이미지 경로 설정
    let rightImage = leftStoreImages[12]; // 기본값
    let leftImage = rightStoreImages[10]; // 기본값

    // rightStore와 leftStore 매개변수의 존재 여부와 매핑 객체에서 해당 키의 존재 여부를 확인하여 이미지 경로 결정
    rightImage = rightStoreImages[rightStore] || rightImage;
    leftImage = leftStoreImages[leftStore] || leftImage;

    // 두 이미지 경로를 객체로 반환
    return {
        rightStoreImage: rightImage,
        leftStoreImage: leftImage
    };
}