import React from 'react';
import './App.css';
import Login from "./components/login/login";
import Conform from "./components/conform/conform";
import Categories from "./components/categories/categories";
import CardMini from "./components/pokemonCardMini/pokemonCardMini";
import PokemonCard from "./components/pokemonCard/pokemonCard";

import {Route} from "react-router-dom";


function App() {

    const [auth, setAuth] = React.useState(false)

    return (
        <div className="App">
            {/*<Route exact path='/' render={()=> <Login auth={auth} setAuth={setAuth}/>}/>*/}
            {/*<Route path='/login' render={()=> <Login auth={auth} setAuth={setAuth}/>}/>*/}
            {/*<Route path='/categories' component={Categories}/>*/}
            {/*<Login auth={auth} setAuth={setAuth}/>*/}
            <Conform/>
            {/*<Categories/>*/}
            {/*<PokemonCard />*/}

            {/*<CardMini/>*/}


        </div>
    );
}

export default App;
