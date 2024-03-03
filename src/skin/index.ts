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

export const skins = {
    man: [
        { type: 'Face', items: ManFace, title: '얼굴'},
        { type: 'Hair', items: ManHair, title: '머리'},
        { type: 'Top', items: ManTop, title: '상의'},
        { type: 'Bottom', items: ManBottom, title: '하의' },
        { type: 'animal', items: , title: '고양이'},
        { type: 'rightStore', items: , title: '가게(오)'},
        { type: 'leftStore', items: , title: '가게(왼)'},

    ],
    woman: [
        { type: 'Face', items: WomanFace, title: '얼굴'},
        { type: 'Hair', items: WomanHair, title: '머리'},
        { type: 'Top', items: WomanTop, title: '상의'},
        { type: 'Bottom', items: WomanBottom, title: '하의'},
    ],
};

export const sex = {
    man: ManBody.imgSrc,
    woman: WomanBody.imgSrc,
};
