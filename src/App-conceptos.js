import logo from './logo.svg';
import './App.css';
import TimerControl from './components/TimerControl';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">

      {/* <TimerControl /> */}

      <nav>
        {/* <a href="/">Home</a>
        <a href="/profile">Profile</a> */}
        <Link to="/">Home</Link>
        <Link to="/profile/caro2">Perfil de Caro</Link>
        <Link to="/profile/iñigo">Perfil de Iñigo</Link>
      </nav>

      <Routes>
        {/* aqui van todas nuestras rutas posibled para acceso por URL */}
        {/* condicionar la renderizacion dependiendo del URL */}

        <Route path="/" element={ <Home /> }/>
        <Route path="/profile/:username" element={ <Profile /> }/>
        <Route path="*" element={ <NotFound /> }/>

      </Routes>

    </div>
  );
}

export default App;
