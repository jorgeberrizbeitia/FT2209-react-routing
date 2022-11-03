
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonNav from './components/PokemonNav';
import PokeDetails from './pages/PokeDetails';
import PokeHome from './pages/PokeHome';

function App() {
  return (
    <div className="App">

        <h1>Mi pagina de Pokemon</h1>

        <div id="poke-container">

        <PokemonNav />

        {/* "/" => <PokeHome /> */}
        {/* "/pokemon/bulbasaur" => <PokeDetails /> */}

        <Routes>

          <Route path="/" element={ <PokeHome /> }/>
          <Route path="/pokemon/:name" element={ <PokeDetails /> }/>

        </Routes>

        </div>

    </div>
  )
}

export default App