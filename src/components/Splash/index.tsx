// Splash.tsx
import React, { useEffect, useState } from 'react';
import * as Styled from './style';

interface SplashProps {
    showSplash?: boolean;
}

export default function Splash({ showSplash }: SplashProps) {
    const [animateOut, setAnimateOut] = useState(false);
    const iconsCount = 25; // 아이콘 개수

    useEffect(() => {
        if(!showSplash) return;
        setAnimateOut(true);
    }, [showSplash]);

    // 무작위 위치 및 회전 각도 생성 함수
    const getRandomPositionAndRotation = () => {
        const top = Math.random() * 100; // 0%에서 100% 사이
        const left = Math.random() * 100; // 0%에서 100% 사이
        const rotation = Math.random() * 180; // 0deg에서 360deg 사이의 회전 각도
        return { top: `${top}%`, left: `${left}%`, rotation };
    };

    // Splash 컴포넌트 내부
    return (
        <Styled.Layout>
            <Styled.Wrapper animateOut={animateOut}>
                {Array.from({ length: iconsCount }).map((_, index) => {
                    const { top, left, rotation } = getRandomPositionAndRotation();
                    return (
                        <Styled.SplashIcon
                            key={index}
                            top={top}
                            left={left}
                            rotation={rotation} // 무작위 회전 각도 전달
                        />
                    );
                })}
            </Styled.Wrapper>
        </Styled.Layout>
    );

}
