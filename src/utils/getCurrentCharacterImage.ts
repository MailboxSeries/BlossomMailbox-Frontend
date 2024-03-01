// 성별에 따른 body 이미지 import
import manBody from '@/assets/character/man/body/body.png';
import womanBody from '@/assets/character/woman/body/body.png';

// Hair Images
import manHair1 from '@/assets/character/man/hair/hair1.png';
import manHair2 from '@/assets/character/man/hair/hair2.png';
import manHair3 from '@/assets/character/man/hair/hair3.png';
import womanHair1 from '@/assets/character/woman/hair/hair1.png';
import womanHair2 from '@/assets/character/woman/hair/hair2.png';
import womanHair3 from '@/assets/character/woman/hair/hair3.png';

// Face Images
import manFace1 from '@/assets/character/man/face/face1.png';
import manFace2 from '@/assets/character/man/face/face2.png';
import manFace3 from '@/assets/character/man/face/face3.png';
import womanFace1 from '@/assets/character/woman/face/face1.png';
import womanFace2 from '@/assets/character/woman/face/face2.png';
import womanFace3 from '@/assets/character/woman/face/face3.png';

// Top Images
import manTop1 from '@/assets/character/man/top/top1.png';
import manTop2 from '@/assets/character/man/top/top2.png';
import manTop3 from '@/assets/character/man/top/top3.png';
import womanTop1 from '@/assets/character/woman/top/top1.png';
import womanTop2 from '@/assets/character/woman/top/top2.png';
import womanTop3 from '@/assets/character/woman/top/top3.png';

// Bottom Images
import manBottom1 from '@/assets/character/man/bottom/bottom1.png';
import manBottom2 from '@/assets/character/man/bottom/bottom2.png';
import manBottom3 from '@/assets/character/man/bottom/bottom3.png';
import womanBottom1 from '@/assets/character/woman/bottom/bottom1.png';
import womanBottom2 from '@/assets/character/woman/bottom/bottom2.png';
import womanBottom3 from '@/assets/character/woman/bottom/bottom3.png';

/** 캐릭터 스킨 이미지 반환하는 함수 */
export default function getCurrentCharacterImage(
    sex: string = 'woman',
    hair: number = 3,
    face: number = 1,
    top: number = 3,
    bottom: number = 3
): { sexImage: string, hairImage: string, faceImage: string, topImage: string, bottomImage: string } {
    
    // 이미지 경로 매핑
    const imageMap = {
        man: {
        body: manBody,
        hair: [manHair1, manHair2, manHair3],
        face: [manFace1, manFace2, manFace3],
        top: [manTop1, manTop2, manTop3],
        bottom: [manBottom1, manBottom2, manBottom3],
        },
        woman: {
        body: womanBody,
        hair: [womanHair1, womanHair2, womanHair3],
        face: [womanFace1, womanFace2, womanFace3],
        top: [womanTop1, womanTop2, womanTop3],
        bottom: [womanBottom1, womanBottom2, womanBottom3],
        }
    };

    // 선택된 이미지 결정
    const selectedImages = {
        sexImage: imageMap[sex].body, // 성별에 따른 body 이미지
        hairImage: imageMap[sex].hair[hair - 1],
        faceImage: imageMap[sex].face[face - 1],
        topImage: imageMap[sex].top[top - 1],
        bottomImage: imageMap[sex].bottom[bottom - 1],
    };

    return selectedImages;
}