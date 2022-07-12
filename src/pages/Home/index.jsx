import React from 'react'
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { PaginationBtnLeft, PaginationBtnRight, Pokedex, Wrapper } from '../../styles/Home';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import {BsArrowLeft, BsArrowRight}   from 'react-icons/bs';

function Home() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const [pokemons, setPokemons] = useState([]);
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')

    const getAllPokemons = useCallback(async () => {
        const data = await axios.get(url)
            .then((response)=>{return response.data})
            .catch((err)=>{return console.log("Falha ao requisitar dados! \n\n\n" + err)})

        setPrevPage(await data.previous)
        setNextPage(await data.next)

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
        console.log(data);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    

    useEffect(()=>{
        getAllPokemons()
    }, [getAllPokemons])

    const prevPag = () => {
        setUrl(prevPage)
    }
    const nextPag = () => {
        setUrl(nextPage)
    }   

    return (
        <Wrapper>
            <NavBar/>
            
            
            <Pokedex>
                {pokemons.map((pokemon, index) => (
                        <Card key={index} props={pokemon}/>
                ))}

                {prevPage !== null &&(
                    <PaginationBtnLeft onClick={prevPag}><BsArrowLeft/></PaginationBtnLeft>
                )}
                <PaginationBtnRight onClick={nextPag}><BsArrowRight/></PaginationBtnRight>
            </Pokedex>
        </Wrapper>
    )
}

export default Home