import React, {useEffect, useState} from "react";
import styles from "./pokemonCard.module.css";
import * as axios from "axios";
import Preloader from "../preloader/preloader";

//xy7-10 dp6-90
function PokemonCard() {
    let [state, setState] = useState({isLoading: true})
    useEffect(() => {
        axios.get("https://api.pokemontcg.io/v1/cards/dp6-90").then(response => {

            setState({...state, card: response.data.card, isLoading: false});
        })
    }, [])

    if (state.isLoading) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <div className={styles.back}>{"<"} Back</div>
                    <div className={styles.logout}>Logout</div>
                </header>
                <div className={styles.contentContainer}>
                    <div className={styles.leftPanel}>
                        <div className={styles.bigPic}><img className={styles.imgTest} src={state.card.imageUrlHiRes}
                                                            alt=""/></div>
                        {state.card.attacks.map((item) => <div className={styles.description}
                                                               key={item.name}>{item.text}</div>)}
                    </div>
                    <div className={styles.infoPanel}>
                        Pokemon name: {state.card.name}
                        <br/>
                        Type: {state.card.types.join(' ')}
                        <br/>
                        SubType: {state.card.subtype}
                        <hr className={styles.hr}/>
                        attackDamage: {state.card.attacks[0].damage}
                        <br/>
                        attackCost: {state.card.attacks[0].cost}
                        <br/>
                        resistances: {state.card.resistances
                        ? state.card.resistances.map((item) => <span key={item.type}>{item.type}</span>)
                        : <span>none</span>}
                        {console.log(!!state.card.resistances)}
                        <br/>
                        evolvesFrom: {state.card.evolvesFrom}
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard;