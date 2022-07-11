import React from 'react'

function NavBar() {

  const searchPokemon = async (event) => {
    const key = event.keyCode;
    const value = event.target.value;
    if(key === 13){
        

        window.location.href = `/pokemon/${value}`;;
      
    }
}

  return (
    <div>
        <input type={'text'} onKeyDown={searchPokemon}/>
        <button onClick={searchPokemon}>Next</button>
    </div>
  )
}

export default NavBar