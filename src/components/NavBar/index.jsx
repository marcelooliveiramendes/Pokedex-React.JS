import React from 'react'

function NavBar({searchPokemon}) {
  return (
    <div>
        <input type={'text'} onKeyDown={searchPokemon}/>
        <button onClick={searchPokemon}>Next</button>
    </div>
  )
}

export default NavBar