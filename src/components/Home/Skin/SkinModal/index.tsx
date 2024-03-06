import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { skinState } from '@/atoms/skinState';
import Modal from '@/components/common/Modal';
import { SkinSelector } from '../SkinSelector'
import { skins } from '@/assets/skin'; // 스킨 데이터 경로 확인
import { SkinModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import SexButton from '@/components/Home/Skin/SexButton';
import LongButton from '@/components/LongButton';
import BackButton from '@/components/BackButton';

export const mockData = {
    success: true,
    data: {
        lockSkinCnt: 5,
        hair: {
            having: [1, ],
            unlock: [3, ],
            lock: [2]
        },
        face: {
            having: [1, ],
            unlock: [3, ],
            lock: [2]
        },
        top: {
            having: [1, ],
            unlock: [3, ],
            lock: [2]
        },
        bottom: {
            having: [1, ],
            unlock: [3, ],
            lock: [2]
        },
        animal: {
            having: [1],
            unlock: [2],
            lock: [3, 4]
        },
        rightStore: {
            having: [1, 2, 5],
            unlock: [3],
            lock: [4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        leftStore: {
            having: [1, 6],
            unlock: [2, 3],
            lock: [4, 5, 7, 8, 9, 10, 11, 12]
        }
    },
    error: null
};

function SkinModal({ isOpen, onClose }: SkinModalProps) {
    const [skin, setSkin] = useRecoilState(skinState);

    const onSelectSkin = useCallback((skinType, selectedSkinIndex: number) => {
        setSkin(prevSkin => ({
            ...prevSkin,
            [skinType]: selectedSkinIndex
        }));
        console.log('selectedSkinIndex', selectedSkinIndex);
    }, [setSkin]);

    const skinStatus = useCallback((type, index) => {
        //const item = data[skinType] && data[skinType][index]; //TODO: 서버로 부터 받은 { data }에서 가져와야함.
        // if (item.missionStatus && !item.missionChecked) {
        //     return 'unlocked';
        // } else {
        //     return 'locked';
        // }
        // const statusData = mockData.data[type];
        // if (statusData.lock.includes(index)) return 'locked';
        // if (statusData.unlock.includes(index)) return 'unlocked';
        // if (statusData.having.includes(index)) return 'having';
        return ''; // 기본값
    }, []);

    console.log('skin',skin)

    const handleSelectComplete = () => {
        //TODO: mutate해서 서버에 스킨 정보 업데이트. skin값 보내면 됨.
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle="스킨 선택">
            <BackButton onClick={onClose} />
            <Styled.Wrapper>
                <Styled.RowContainer>
                    <SexButton selectedSex="man" onClick={() => setSkin(prevState => ({ ...prevState, sex: "man" }))} />
                    <SexButton selectedSex="woman" onClick={() => setSkin(prevState => ({ ...prevState, sex: "woman" }))}/>
                </Styled.RowContainer>
                <Styled.InnerWrapper>
                    {skins[skin.sex].map(({ type, items, title }) => (
                    <React.Fragment key={type}>
                    <Styled.SkinTitle>{title}</Styled.SkinTitle>
                    <SkinSelector
                        items={items}
                        selectedType={skin[type]}
                        onSelect={(selectedSkinIndex) => onSelectSkin(type, selectedSkinIndex)}
                        skinStatus={skinStatus}
                        />
                    </React.Fragment>
                    ))}
                </Styled.InnerWrapper>
                <LongButton margin={"-10px 0 0 0"} onClick={() => handleSelectComplete()}>
                    선택 완료!
                </LongButton>
            </Styled.Wrapper>
            
        </Modal>
    );
}

export default SkinModal;
