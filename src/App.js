import React, {useState} from 'react';
import './App.css';
import Login from "./components/login/login";
import Conform from "./components/conform/conform";
import Categories from "./components/categories/categories";
import CardMini from "./components/pokemonCardMini/pokemonCardMini";
import PokemonCard from "./components/pokemonCard/pokemonCard";

import {Route} from "react-router-dom";
import Preloader from "./components/preloader/preloader";


function App() {

    const [auth, setAuth] = useState(true)

    return (
        <div className="App">
            {/*{auth*/}
            {/*    ? <Categories/>*/}
            {/*    : <Login auth={auth} setAuth={setAuth}/>*/}
            {/*}*/}
            {/*<Login auth={auth} setAuth={setAuth}/>*/}
            {/*<Conform/>*/}
            {/*<Categories/>*/}
            {/*<PokemonCard/>*/}

            {/*TRUE*/}
            <Route exact path='/' render={() => <Login auth={auth} setAuth={setAuth}/>}/>
            <Route path='/login' render={() => <Login auth={auth} setAuth={setAuth}/>}/>
            <Route path='/conform' render={() => <Conform auth={auth} setAuth={setAuth}/>}/>
            <Route path='/categories' render={() => <Categories auth={auth} setAuth={setAuth}/>}/>
            <Route path='/card' render={() => <PokemonCard auth={auth} setAuth={setAuth}/>}/>

            {/*<Login auth={auth} setAuth={setAuth}/>*/}
            {/*<Conform/>*/}
            {/*<Categories/>*/}
            {/*<PokemonCard />*/}
            {/*<Preloader/>*/}
            {/*<CardMini/>*/}


        </div>
    );
}

export default App;
