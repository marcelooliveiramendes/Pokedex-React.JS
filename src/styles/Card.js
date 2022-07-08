import styled from "styled-components";

export const CardBox = styled.div`
    width: 320px;
    height: 150px;
    display: flex;
    margin:10px;
    background-color: ${(props) => props.backgroundColor};
`
export const PokeInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 20px;
`
export const Title = styled.h3`
    font-size: 22px;
    
`
export const PokeTypes = styled.ul`
    display: flex;
    list-style: none;


`
export const TypePoke = styled.li`
    &:nth-child(2){
        margin-left: 20px;
    }
`