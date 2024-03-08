export interface ISkinState {
    sex: "man" | "woman";
    top: number;
    bottom: number;
    face: number;
    hair: number;
    animal: number;
    rightStore: number;
    leftStore: number;
}

// Skin 항목의 타입을 업데이트하여 missionId를 포함시킵니다.
export interface ISkinItem {
    imgSrc: string;
    index: number;
    missionId?: string; // missionId는 선택적 속성으로, 잠금 해제가 필요한 항목에만 존재합니다.
    width: number;
    height: number;
    name: string | number;
};

export interface ISkinSelectorProps {
    type: string;
    items: Array<ISkinItem>;
    selectedType: number;
    onSelect: (index: number) => void;
    skinStatus: (type: string | number, index: number) => string;
};

export interface ISkinUnlockChange {
    type: string;
    index: number;
};