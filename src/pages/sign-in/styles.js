import styled from 'styled-components';

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    form{
        width: 300px;
        margin: 40px 0;
        color: #8647AD;
    }
`

export const Wrapper = styled.div `
    max-width: 370px;
`

export const Column = styled.div `
    flex: 1;
`
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2 `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleSignIn = styled.p `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleSignIn = styled.p `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const ForgotText = styled.p `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e5e044;
`

export const LoginText = styled.p `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin: 5px 0;
`

export const LoginTextHighlights = styled.button `
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    border: none;
    background: transparent;
    color: #23DD7A;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }
`

export const Undertext = styled.div `
    width: 80%;
    margin: 20px 0;
    font-family: 'Open Sans', 'sans-serif', sans-serif;
    font-style: normal;
    font-size: 18px;
`
