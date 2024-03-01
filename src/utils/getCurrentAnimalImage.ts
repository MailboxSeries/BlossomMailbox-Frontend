import Cat1 from '@/assets/animal/cat1.png';
import Cat2 from '@/assets/animal/cat2.png';
import Cat3 from '@/assets/animal/cat3.png';
import Cat4 from '@/assets/animal/cat4.png';

/** 동물 이미지 반환하는 함수 */
export function getCurrentAnimalImage(animal?: string): { animalImage: string } {
    const animalImages = {
        cat1: Cat1,
        cat2: Cat2,
        cat3: Cat3,
        cat4: Cat4,
    };

    // 파라미터 값이 예상 범위를 벗어날 경우 기본 이미지(예: cat4)를 반환합니다.
    const animalImage = animalImages[animal] || Cat4;
    return { animalImage };
}
