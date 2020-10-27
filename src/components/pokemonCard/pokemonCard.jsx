import React, {useEffect, useState} from "react";
import styles from "./pokemonCard.module.css";
import * as axios from "axios";
import Preloader from "../preloader/preloader";
import {NavLink, Redirect} from "react-router-dom";


function PokemonCard(props) {
    let id = window.location.pathname.split('d/')[1]

    let [state, setState] = useState({isLoading: true})
    useEffect(() => {
        axios.get(`https://api.pokemontcg.io/v1/cards/${id?id:"dp6-90"}`).then(response => {
            setState({...state, card: response.data.card, isLoading: false});
        })
    }, [])

    function logout() {
        props.setAuth(false)
    }

    if (!props.auth) return <Redirect to={"/login"}/>

    if (state.isLoading) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <NavLink className={styles.back} to={"/categories"}>{"<"} Back</NavLink>
                    <div className={styles.logout} onClick={logout}>Logout</div>
                </header>
                <div className={styles.contentContainer}>
                    <div className={styles.leftPanel}>
                        <div className={styles.bigPic}><img className={styles.imgTest} src={state.card.imageUrlHiRes}
                                                            alt=""/></div>
                        {state.card.attacks?
                            state.card.attacks.map((item) => <div className={styles.description}
                                                               key={item.name}>{item.text}</div>):"error"}
                    </div>
                    <div className={styles.infoPanel}>
                        Pokemon name: {state.card.name}
                        <br/>
                        Type: {state.card.types?state.card.types.join(' '):"error"}
                        <br/>
                        SubType: {state.card.subtype}
                        <hr className={styles.hr}/>
                        attackDamage: {state.card.attacks?state.card.attacks[0].damage:"error"}
                        <br/>
                        attackCost: {state.card.attacks?state.card.attacks[0].cost:"error"}
                        <br/>
                        resistances: {state.card.resistances
                        ? state.card.resistances.map((item) => <span key={item.type}>{item.type}</span>)
                        : <span>none</span>}
                        <br/>
                        evolvesFrom: {state.card.evolvesFrom}
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard;