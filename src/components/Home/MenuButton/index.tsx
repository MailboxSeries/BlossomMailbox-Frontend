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
          width={55} 
          height={55} 
          margin={"0px 0 0 0"} 
          background={MenuButtonImg}
          fontSize={20}
          onClick={handleMenuOpen}
          position='absolute'
          top={"12px"}
          right={"12px"}
          zIndex={3}
          {...props}
        >
          {props.children}
          
        </Button>
        <Styled.GlowContainer />

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
