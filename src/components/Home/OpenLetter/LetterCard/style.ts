import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
    width: 200px;
    height: 54px;
    background-color: ${theme.colors.pink};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`;

export const Wrapper = styled.div`
    align-items: right;
    width: 200px;
    padding: 0 16px;
`;

export const IsReply = styled.p`
    font-size: 12px;
    color: ${theme.colors.white};
    margin: 0;
`;

export const Sender = styled.p`
    font-size: 18px;
    color: ${theme.colors.white};
    margin: 0;
`;

