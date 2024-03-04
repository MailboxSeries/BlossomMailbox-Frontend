import { ManBottom } from "./man/bottom";
import { ManFace } from "./man/face";
import { ManHair } from "./man/hair";
import { ManTop } from "./man/top";
import { WomanBottom } from "./woman/bottom";
import { WomanFace } from "./woman/face";
import { WomanHair } from "./woman/hair";
import { WomanTop } from "./woman/top";
import { ManBody } from "./man/body";
import { WomanBody } from "./woman/body";
import { rightStore } from "./rightStore";
import { leftStore } from "./leftStore";
import { animal } from "@/assets/animal";
export const skins = {
    man: [
        { type: 'face', items: ManFace, title: '얼굴'},
        { type: 'hair', items: ManHair, title: '머리'},
        { type: 'top', items: ManTop, title: '상의'},
        { type: 'bottom', items: ManBottom, title: '하의' },
        { type: 'animal', items: animal, title: '고양이'},
        { type: 'rightStore', items: rightStore, title: '가게(오)'},
        { type: 'leftStore', items: leftStore, title: '가게(왼)'},
    ],
    woman: [
        { type: 'face', items: WomanFace, title: '얼굴'},
        { type: 'hair', items: WomanHair, title: '머리'},
        { type: 'top', items: WomanTop, title: '상의'},
        { type: 'bottom', items: WomanBottom, title: '하의'},
        { type: 'animal', items: animal, title: '고양이'},
        { type: 'rightStore', items: rightStore, title: '가게(오)'},
        { type: 'leftStore', items: leftStore, title: '가게(왼)'},
    ],
};

export const sex = {
    man: ManBody.imgSrc,
    woman: WomanBody.imgSrc,
};
