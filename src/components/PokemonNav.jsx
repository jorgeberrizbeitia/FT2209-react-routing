import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PokemonNav() {

  // let pokemonList = []
  const [pokemonList, setPokemonList] = useState([])

  // axios.get("https://pokeapi.co/api/v2/pokemon")
  // .then((response) => {
  //   console.log(response)
  //   setPokemonList(response.data.results)
  // }).catch((err) => {
  //   console.log(err)
  // })

  useEffect(() => {
    // esto solo va a ocurrir una vez
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      console.log(response)
      setPokemonList(response.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>

      <Link to="/">Home</Link>
      
      <h5>Lista de Pokemon</h5>

      {pokemonList.map((eachPokemon) => {
         return (
          <p key={eachPokemon.name}>
              <Link to={`/pokemon/${eachPokemon.name}`}>{eachPokemon.name}</Link>
          </p>
         )
      })}

    </div>
  )
}

export default PokemonNav