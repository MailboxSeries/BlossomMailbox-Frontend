import React from 'react';
import * as Style from './style';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {

  return (
    <>
      <Style.Layout>
        <Style.Wrapper>
          {children}
        </Style.Wrapper>
      </Style.Layout>
    </>
  );
}