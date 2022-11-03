import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

function PokeDetails() {

  // 1. crear un estado para guardar los detalles del pokemon
  const [pokeInfo, setPokeInfo] = useState(null)
  const [isFetching, setIsFetching] = useState(true) // isFetching significa (estamos recibiendo data de una API)

  // 2. tenemos que buscar el nombre del pokemon que usaremos para contactar a la API
  const { name } = useParams()

  // 3. contactar a la API con el useEffect y axios
  useEffect(() => {

    // opcionalmente, cambiamos isFetching a true para que empiece a buscar
    setIsFetching(true)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      console.log(response)
      // setTimeout(() => {
        setPokeInfo(response.data)
        setIsFetching(false)
      // }, 2000)
    }).catch((err) => {
      console.log(err)
    })
  }, [name])
  // actua como componentDidUpdate y componentDidMount

  // 4. clausula de guardia para el loading
  if (isFetching === true) {
    return <h3>... buscando</h3>
    // no hago más hasta que isFetching sea falso
  }
  
  // 5. renderizar los detalles del pokemon

  return (
    <div>
      
      <h3>Detalles</h3>

      <h4>Nombre: {pokeInfo.name}</h4>
      <p>Altura: {pokeInfo.height}</p>
      <img src={pokeInfo.sprites.front_default} alt="" width={300} />
      <img src={pokeInfo.sprites.other.dream_world.front_default} alt="" width={300} />

    </div>
  )
}

export default PokeDetails