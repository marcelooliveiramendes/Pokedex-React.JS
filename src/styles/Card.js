import styled from "styled-components";

export const CardBox = styled.div`
    width: 320px;
    height: 130px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:10px;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
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
    text-transform: capitalize;
`
export const PokeTypes = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 10px;
`
export const TypePoke = styled.li`
    text-transform: capitalize;

    &:nth-child(2){
        margin-left: 20px;
    }
`
export const Thumbnail = styled.img`
    width: 100px;
    height: 100px;
`