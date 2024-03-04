import Button from '@/components/common/Button';
import { MenuButtonProps } from '@/interfaces/button';
import MenuButtonImg from '@/assets/flower/flowerBtnBig.png';
import { useState } from 'react';
import * as Styled from './style';
import useIsMyHome from '@/hooks/useIsMyHome';

export default function MenuButton(props: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMyHome } = useIsMyHome();

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button 
        width={60} 
        height={60} 
        margin={"0px 0 0 0"} 
        background={MenuButtonImg}
        fontSize={20}
        onClick={handleMenuOpen}
        position='absolute'
        top={"10px"}
        right={"10px"}
        zIndex={3}
        {...props}
      >
        {props.children}
        
      </Button>
      {isOpen &&
        Array.from({ length: 50 }, (_, i) => (
          <Styled.SunRay
              key={i}
              style={{
                  transform: `rotate(${-10 + i}deg)`,
                  transformOrigin: 'top',
              }}
              isActive={isOpen}
          />
        ))
        }

        {isOpen && (
          <Styled.MenuWrapper>
            <Styled.MenuItem isActive={isOpen}>이용안내</Styled.MenuItem>
            {isMyHome && (
              <Styled.MenuItem isActive={isOpen}>로그아웃</Styled.MenuItem>
            )}
          </Styled.MenuWrapper>
        )}
    </>
  );
}
