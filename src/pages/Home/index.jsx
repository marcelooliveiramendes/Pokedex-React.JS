import React from 'react'
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Pokedex, Wrapper } from '../../styles/Home';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';

function Home() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const [pokemons, setPokemons] = useState([]);

    const getAllPokemons = useCallback(async () => {
        const data = await axios.get(url)
            .then((response)=>{return response.data})
            .catch((err)=>{return console.log("Falha ao requisitar dados! \n\n\n" + err)})

        const getPokemonsInfo = async (result) => {
            result.forEach(async (pokemon) => {
                const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    .then((response)=>{return response.data})
                    .catch((err)=>{return console.log("Falha ao requisição do pokemon! \n\n\n" + err)})

                setPokemons(currentList => [...currentList, data])
            })
        }

        getPokemonsInfo(data.results)
        setPokemons([])
        console.log(await pokemons)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    

    useEffect(()=>{
        getAllPokemons()
    }, [getAllPokemons])

    return (
        <Wrapper>
            <NavBar/>
            <Pokedex>
                {pokemons.map((pokemon, index) => (
                    <Card key={index} props={pokemon}/>
                ))}
            </Pokedex>
        </Wrapper>
    )
}

export default Home