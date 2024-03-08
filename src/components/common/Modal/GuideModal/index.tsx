import * as Styled from './style';
import React from 'react';
import Modal from '@/components/common/Modal';
import { GuideModalProps } from '@/interfaces/modal';

function GuideModal({onClose, isOpen}: GuideModalProps) {
    
    const handleNavigateInstagram = () => {
        window.location.href = 'https://www.instagram.com/blossommailbox_official?igsh=NWVheHQydnJrcjJ6&utm_source=qr';
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle={'이용안내'} modalType={'Modal'}>
            <Styled.Wrapper>
                <Styled.InnerWrapper>
                    <Styled.TextWrapper>
                        <Styled.DiscriptionText>
                        {"벚꽃우편함 이용방법 \n"}
                        </Styled.DiscriptionText>
                        <Styled.Text>
                        {"-내 벚꽃 공원을 만들고 지인들에게 링크를 공유해요."}
                        </Styled.Text>
                        <Styled.Text>
                        {"-매일매일 출석을 하며 스킨을 획득해 공원과 나를 더 멋지게 꾸며요."}
                        </Styled.Text>
                        <Styled.Text>
                        {"-지인에게 봄날의 따뜻한 편지와 추억이 담긴 사진을 받을 수 있어요."}
                        </Styled.Text>
                        <Styled.Text>
                        {"-자신에게 편지를 보낸 익명의 누군가와 함께 답장을 주고받을 수 있게 되었어요."}
                        </Styled.Text>

                        <Styled.DiscriptionText>
                        {"벚꽃우편함 인스타그램 공식계정\n"}
                        </Styled.DiscriptionText>
                        <Styled.InstagramButton onClick={handleNavigateInstagram}>
                        @blossommailbox_official
                        </Styled.InstagramButton>
                        <Styled.Text>
                        {"-인스타그램 공식계정에서 공지사항을 확인해주세요!"}
                        </Styled.Text>
                        <Styled.Text>
                        {"-불편사항/건의사항 등이 있다면 인스타그램 공식계정을 통해 문의 부탁드려요."}
                        </Styled.Text>

                        <Styled.DiscriptionText>
                        {"우편함 Series\n"}
                        </Styled.DiscriptionText>
                        <Styled.Text>
                        {"-단풍우편함, 눈꽃우편함에 이어 벚꽃 시즌을 위한 서비스에요."}
                        </Styled.Text>
                        <Styled.Text>
                        {"-봄에 이어 여름에도 출시 예정이니 많은 기대 부탁드려요!"}
                        </Styled.Text>
                        <Styled.Text>
                        {"-벚꽃우편함은 동국대, 삼육대 학생 5명에서 만든 벚꽃 시즌 서비스예요."}
                        </Styled.Text>
                        <Styled.Text>
                        {"-벚꽃우편함은 비영리 서비스예요."}
                        </Styled.Text>
                    </Styled.TextWrapper>
                </Styled.InnerWrapper>
            </Styled.Wrapper>
        </Modal>
    );
}

export default React.memo(GuideModal);