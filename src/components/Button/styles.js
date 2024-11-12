import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    border: none;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin: 0 10px;
    
    ${({ variant }) => variant !== "primary" && css`
        min-width: 127px;
        height: 33px;
        background: #E4105D;
        font-size: 18px;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `} 
`