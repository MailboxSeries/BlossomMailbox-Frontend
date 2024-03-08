import React, { useEffect, useState, CSSProperties } from 'react';
import flowerLeafSmallImg from "@/assets/flower/flowerLeafSmall.png";
import flowerLeafBigImg from "@/assets/flower/flowerLeafBig.png";
import * as Styled from './style';

const numFlowers = 30;

interface CSSPropertiesWithCustomVars extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
  '--rotation-start'?: string;
  '--rotation-end'?: string;
}

export default function FlowerFalling() {
  const [flowers, setFlowers] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newFlowers = [];
      
    for (let i = 0; i < numFlowers; i++) {
      const isSmall = Math.random() > 0.5;
      const leafType = isSmall ? flowerLeafSmallImg : flowerLeafBigImg;
      const size = isSmall ? '15px' : '20px'; // 작은 이미지와 큰 이미지에 대한 크기 설정
      const delay = Math.random() * 10;
      const startLeft = `${Math.random() * 200 - 50}%`;  
      const endLeft = `${Math.random() * 200 - 50}%`;   
      const rotateStart = `${Math.floor(Math.random() * 180)}deg`;
      const rotateEnd = `${Math.floor(Math.random() * 180)}deg`;

      newFlowers.push(
        <Styled.FlowerWrapper key={i}>
          <Styled.Flower
            style={{
              backgroundImage: `url(${leafType})`,
              animationDelay: `${delay}s`,
              "--start-left": startLeft,
              "--end-left": endLeft,
              "--rotation-start": rotateStart,
              "--rotation-end": rotateEnd,
              "--size": size,
            } as CSSPropertiesWithCustomVars}
          />
        </Styled.FlowerWrapper>
      );
    }

    setFlowers(newFlowers);
  }, []);

  return <>{flowers}</>;
}