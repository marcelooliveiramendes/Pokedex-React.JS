
import React from 'react'
import { CardBox, PokeInfos, PokeTypes, Thumbnail, Title, TypePoke } from '../../styles/Card'


function Card({props}) {

    let types = props.types
    let bgColor = '';
    let bgTypeBoxColor = '';

    switch (props.types[0].type.name){
        case 'normal': 
            bgColor = "#c4c3c3"
            break;
        case 'fire': 
            bgColor = "#ffa860"
            break; 
        case 'water': 
            bgColor = "#37a7f2"
            break;   
        case 'grass': 
            bgColor = "#8ec28c"
            break;   
        case 'flying': 
            bgColor = "#9bb5e5"
            break;   
        case 'fighting': 
            bgColor = "#d64260"
            break;   
        case 'poison': 
            bgColor = "#bd61d1"
            break;   
        case 'electric': 
            bgColor = "#f4d23c"
            break;   
        case 'ground': 
            bgColor = "#dc8253"
            break;   
        case 'rock': 
            bgColor = "#d0c390"
            break;   
        case 'psychic': 
            bgColor = "#f9797c"
            break;   
        case 'ice': 
            bgColor = "#76cfc2"
            break;
        case 'bug': 
            bgColor = "#70B77E"
            break;   
        case 'ghost': 
            bgColor = "#5c6cb7"
            break;   
        case 'steel': 
            bgColor = "#56a5a8"
            break;   
        case 'dragon': 
            bgColor = "#067abe"
            break;   
        case 'dark': 
            bgColor = "##5a5465"
            break;
        case 'fairy': 
            bgColor = "#ed93e2"
            break;

        default:
            console.log("Not Found");
    }



    const mouseEffect = () => {
        console.log('olaaaaaaa');
    }

    return (
        <CardBox onMouseEnter={mouseEffect} backgroundColor={bgColor}>
            <PokeInfos>
                <Title>{props.name}</Title>
                <PokeTypes>
                    {types.map((type, index)=>(
                        <TypePoke key={index}>{type.type.name}</TypePoke>
                    ))}
                </PokeTypes>

            </PokeInfos>
            <Thumbnail src={props.sprites.other.dream_world.front_default} alt={"Imagem do pokemon"}/>
        </CardBox>  
    )
}

export default Card