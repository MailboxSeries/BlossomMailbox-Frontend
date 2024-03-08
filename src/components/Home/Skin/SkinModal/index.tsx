import React, { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { skinState } from '@/atoms/skinState';
import Modal from '@/components/common/Modal';
import { SkinSelector } from '../SkinSelector'
import { skins } from '@/assets/skin'; // 스킨 데이터 경로 확인
import { SkinModalProps } from '@/interfaces/modal';
import * as Styled from './style';
import SexButton from '@/components/Home/Skin/SexButton';
import LongButton from '@/components/common/Button/LongButton';
import BackButton from '@/components/common/Button/BackButton';
import { useGetSkins } from '@/hooks/useGetSkins';
import { useQueryClient } from '@tanstack/react-query';
import { usePutSkins } from '@/hooks/usePutSkins';
import { isAxiosError } from 'axios';
import { useLogout } from '@/hooks/useLogout';
import { sortSkinsByType } from '@/utils/sortSkinsByType';

function SkinModal({ isOpen, onClose }: SkinModalProps) {
    const [skin, setSkin] = useRecoilState(skinState);
    const { data } = useGetSkins();
    const queryClient = useQueryClient();
    const { mutate }  = usePutSkins();
    const { mutate: logout } = useLogout();

    const onSelectSkin = useCallback((skinType, selectedSkinIndex: number) => {
        setSkin(prevSkin => ({
            ...prevSkin,
            [skinType]: selectedSkinIndex
        }));
    }, [setSkin]);

    const sortedItemsByType = useMemo(() => sortSkinsByType(skins, skin.sex, data), [skin.sex, data]);

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
                        logout();
                    }
                    logout();
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

export default React.memo(SkinModal);