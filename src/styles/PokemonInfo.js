import styled from "styled-components";

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor};

`
export const BackBtn = styled.button`
    width: 120px;
    position: fixed;
    top: 115px;
    left: 210px;

`

export const InfoBox = styled.section`
    width: 70%;
    height: 60%;
    background-color: #d4d4d4;
    border-radius: 20px;
`