import React, { useEffect, useState, CSSProperties } from 'react';
import flowerLeafSmallImg from "@/assets/flower/flowerLeafSmall.png";
import flowerLeafBigImg from "@/assets/flower/flowerLeafBig.png";
import * as Styled from './style';

const numFlowers = 35;

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
      const leafType = Math.random() > 0.5 ? flowerLeafSmallImg : flowerLeafBigImg;
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
              "--rotation-end": rotateEnd
            } as CSSPropertiesWithCustomVars}
          />
        </Styled.FlowerWrapper>
      );
    }

    setFlowers(newFlowers);
  }, []);

  return <>{flowers}</>;
}