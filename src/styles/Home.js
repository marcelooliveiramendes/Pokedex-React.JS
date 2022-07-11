import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const Pokedex = styled.section`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const PaginationBtnLeft = styled.button`
    position: fixed;
    top: 400px;
    left: 100px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ef5350;
    border: 1px solid #d4d4d4;
    color: #fff;
`
export const PaginationBtnRight = styled.button`
    position: fixed;
    top: 400px;
    right: 100px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #d4d4d4;
    background-color: #ef5350;
    color: #fff;
    font-weight: bold;
`