import React, {useState} from 'react';
import './App.css';
import Login from "./components/login/login";
import Conform from "./components/conform/conform";
import Categories from "./components/categories/categories";
import PokemonCard from "./components/pokemonCard/pokemonCard";
import {Route} from "react-router-dom";

function App() {

    const [auth, setAuth] = useState(false)

    return (
        <div className="App">
            <Route exact path='/' render={() => <Login auth={auth} setAuth={setAuth}/>}/>
            <Route path='/login' render={() => <Login auth={auth} setAuth={setAuth}/>}/>
            <Route path='/conform' render={() => <Conform auth={auth} setAuth={setAuth}/>}/>
            <Route path='/categories' render={() => <Categories auth={auth} setAuth={setAuth}/>}/>
            <Route path='/card' render={() => <PokemonCard auth={auth} setAuth={setAuth}/>}/>
        </div>
    );
}

export default App;
