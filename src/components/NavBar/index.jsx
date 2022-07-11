import React from 'react'
import { Logo, Navbar, SearchBox } from '../../styles/Navbar';

import logo from '../../img/logo.png';




function NavBar() {

  const searchPokemon = async (event) => {
    const key = event.keyCode;
    const value = event.target.value;
    if(key === 13){
        window.location.href = `/pokemon/${value}`;;
    }
}

  return (
      <Navbar>
        <Logo src={logo} alt={"Logo do pokedex"}/>
        <SearchBox type={'text'} placeholder={'Search'} onKeyDown={searchPokemon}/>
      </Navbar>
  )
}

export default NavBar