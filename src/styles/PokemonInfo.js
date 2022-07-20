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
export const BackBtn = styled.div`
    width: 70%;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    button{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80px;
        height: 30px;
        color: #fff;
        font-weight: bold;
        background: none;
        border: none;
    }
    .arrow{
        font-weight: 900;
    }

`

export const InfoBox = styled.section`
    width: 70%;
    height: 60%;
    background-color: #ededed;
    border-radius: 20px;
    display: flex;
`

export const PokemonThumbnail = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
`

export const Thumbnail = styled.img`
    width: 200px;
`
export const PokemonName = styled.h2`
    font-size: 26px;
    text-transform: capitalize;
    margin-top: 30px;
    border-radius: 30px;
`
export const PokemonContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
`

export const PokeCarac = styled.div`
    width: 70%;
    margin-bottom: 30px;

    h3{
        font-size: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font: 1rem;
    }  
`

export const PokeStats = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d4d4d4;

    h3{
        font-size: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font: 1rem;
    }
`