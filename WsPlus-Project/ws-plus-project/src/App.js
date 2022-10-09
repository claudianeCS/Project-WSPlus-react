import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Filmes from './pages/Filmes/Filme.js'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/cadastrar' element={< Cadastro/>}/>
            <Route exact path='/watch' element={< Filmes/>}/>
        </Routes>
    </Router>
  );
}

export default App;
