import React, { useState, useCallback, useMemo } from 'react';
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
import { useGetSkins } from '@/hooks/useGetSkins';
import { ISkinState } from '@/interfaces/skinState';
import { useQueryClient } from '@tanstack/react-query';
import { usePostSkins } from '@/hooks/usePostSkins';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';

export const data = {
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
};

function SkinModal({ isOpen, onClose }: SkinModalProps) {
    const [skin, setSkin] = useRecoilState(skinState);
    //const { data } = useGetSkins(); //TODO: 더미데이터 삭제 후 이걸로 교체
    const queryClient = useQueryClient();
    const { mutate }  = usePostSkins();
    const { displayToast } = useToast();
    const navigate = useNavigate();

    const onSelectSkin = useCallback((skinType, selectedSkinIndex: number) => {
        setSkin(prevSkin => ({
            ...prevSkin,
            [skinType]: selectedSkinIndex
        }));
    }, [setSkin]);

    const sortedItemsByType = useMemo(() => {
        // skins 배열에서 현재 성별에 해당하는 항목들만 처리
        return skins[skin.sex].reduce((acc, {type, items, title}) => {
            const typeData = data[type];
            if (!typeData) {
                return acc; // 해당 타입에 대한 데이터가 없으면 건너뜀
            }
    
            // 각 타입별로 having, unlock, lock 순서대로 재배열
            const allIndices = [...typeData.having, ...typeData.unlock, ...typeData.lock];
            const sortedItems = allIndices
                .map(index => items.find(item => item.index === index))
                .filter(item => item !== undefined); // 존재하지 않는 아이템은 제외
    
            acc[type] = { items: sortedItems, title }; // 재배열된 아이템과 타이틀 저장
            return acc;
        }, {});
    }, [skin.sex, data]);
    
    const skinStatus = useCallback((type, index) => {
        const statusData = data[type];
        if (!statusData) {
            return '';
        }
        if (statusData.having.includes(index)) return 'having';
        if (statusData.unlock.includes(index)) return 'unlock';
        if (statusData.lock.includes(index)) return 'lock';
        return '';
    }, [data]);
    
    const handleSelectComplete = () => {
        mutate(skin, {
            onSuccess: async () => {
                await queryClient.invalidateQueries({queryKey: ['skins']});
            },
                onError: (error) => {
                    if(isAxiosError(error)) {
                        displayToast('출석하셨어요! 고양이에게 스킨을 받아가세요.');
                        navigate('/')
                    }
                },
        });
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
                {Object.keys(sortedItemsByType).map((type) => {
                    const { items, title } = sortedItemsByType[type];
                    return (
                        <React.Fragment key={type}>
                            <Styled.SkinTitle>{title}</Styled.SkinTitle>
                            <SkinSelector
                                type={type}
                                items={items}
                                selectedType={skin[type]}
                                onSelect={(selectedSkinIndex) => onSelectSkin(type, selectedSkinIndex)}
                                skinStatus={skinStatus}
                            />
                        </React.Fragment>
                    );
                })}
                </Styled.InnerWrapper>
                <LongButton margin={"-10px 0 0 0"} onClick={() => handleSelectComplete()}>
                    선택 완료!
                </LongButton>
            </Styled.Wrapper>
            
        </Modal>
    );
}

export default SkinModal;
