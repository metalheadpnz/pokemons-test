import React from 'react';
import './App.css';
import Login from "./components/login/login";
import Conform from "./components/conform/conform";
import Categories from "./components/categories/categories";
import CardMini from "./components/pokemonCardMini/pokemonCardMini";
import PokemonCard from "./components/pokemonCard/pokemonCard";


function App() {
    return (
        <div className="App">
            {/*<Login/>*/}
            {/*<Conform/>*/}
            {/*<Categories/>*/}
            <PokemonCard />

            {/*<CardMini/>*/}


        </div>
    );
}

export default App;
