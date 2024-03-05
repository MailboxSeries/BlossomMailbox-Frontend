import { tree } from '@/assets/background/tree';

/** 날짜 별 배경 벚꽃 이미지 반환하는 함수 */
export default function getCurrentBackgroundImage(nowDate: number) {
    // 날짜가 20 이상일 경우, tree 배열의 마지막 요소 (tree20)를 반환
    if (nowDate >= 20) {
        return tree[19].imgSrc; // 배열은 0부터 시작하므로, index 19가 tree20에 해당
    }

    // 1부터 19까지의 날짜에 대해 해당하는 tree 이미지 반환
    // nowDate - 1을 인덱스로 사용하여 해당 날짜의 이미지 반환
    return tree[nowDate - 1].imgSrc;
}