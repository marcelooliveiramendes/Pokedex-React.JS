import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { BackBtn, InfoBox, PokemonContent, PokemonName, PokemonThumbnail, PokeStats, Thumbnail, Wrapper } from '../../styles/PokemonInfo'
import { useCallback, useState, useEffect} from 'react';
import { BsArrowReturnLeft } from "react-icons/bs";

function PokemonInfo() {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [color, setColor] = useState([]);
  


  const getPokemonInfo = useCallback(async () => {
       const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((res)=>{return (res.data)})
        .catch((err)=>{return(console.log("Erro ao pegar informações do pokemon \n\n\n" + err))})

        setPokemon(data)
        setColor(data.types[0].type.name)
        console.log(pokemon);


      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params])
      
      switch (color){
          case 'normal': 
              setColor("#c4c3c3") 
              break;
          case 'fire': 
              setColor("#ffa860")
              break; 
          case 'water': 
              setColor("#37a7f2")
              break;   
          case 'grass': 
              setColor("#8ec28c") 
              break;   
          case 'flying': 
              setColor("#9bb5e5") 
              break;   
          case 'fighting': 
              setColor("#d64260") 
              break;   
          case 'poison': 
              setColor("#bd61d1") 
              break;   
          case 'electric': 
              setColor("#f4d23c") 
              break;   
          case 'ground': 
              setColor("#dc8253") 
              break;   
          case 'rock': 
              setColor("#d0c390") 
              break;   
          case 'psychic': 
              setColor("#f9797c") 
              break;   
          case 'ice': 
              setColor("#76cfc2") 
              break;
          case 'bug': 
              setColor("#70B77E") 
              break;   
          case 'ghost': 
              setColor("#5c6cb7") 
              break;   
          case 'steel': 
              setColor("#56a5a8") 
              break;   
          case 'dragon': 
              setColor("#067abe") 
              break;   
          case 'dark': 
              setColor("#5a5465") 
              break;
          case 'fairy': 
              setColor("#ed93e2") 
              break;

          default:
              console.log("Not Found");
      }

  useEffect(()=>{
    getPokemonInfo()
  }, [getPokemonInfo])
    

  return (
    <Wrapper bgColor={color}>
        <BackBtn>
            <Link to="/">
                <button>
                    <BsArrowReturnLeft className='arrow'/> Voltar
                </button>
            </Link>
        </BackBtn>
        <InfoBox>
            {pokemon != "" &&(
            <>
                <PokemonThumbnail>
                    <Thumbnail src={pokemon.sprites.other.dream_world.front_default}/>
                    <PokemonName>{pokemon.name}</PokemonName>
                </PokemonThumbnail>
                <PokemonContent>
                    {pokemon.stats.map((status, index)=>(
                        <PokeStats key={index}>
                            <h3>{status.stat.name}</h3>
                            <p>{status.base_stat}</p>
                        </PokeStats>
                    ))}
                </PokemonContent>
            </>

            )}
        </InfoBox>

    </Wrapper>
  )
}

export default PokemonInfo