import React, {useEffect, useState} from "react";
import styles from "./categories.module.css";
import arrowMini from "../../img/Arrow_mini.svg"
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../preloader/preloader";
import * as axios from "axios";

function Categories(props) {
    let [state, setState] = useState({isLoading: true})
    let [cards, setCards] = useState([]);

    useEffect(getPokemonsCards, [state.type, state.subtype])

    useEffect(() => {
        axios.get("https://api.pokemontcg.io/v1/types").then(response => {
            axios.get("https://api.pokemontcg.io/v1/subtypes").then(response2 => {
                setState({
                    ...state,
                    types: response.data.types,
                    subtypes: response2.data.subtypes,
                    isLoading: false
                });
            })
        })
    }, [])

    if (!props.auth) return <Redirect to={"/login"}/>

    function logout() {
        props.setAuth(false)
    }

    function getPokemonsCards() {
        axios.get(`https://api.pokemontcg.io/v1/cards?types=${state.type ? state.type : ""}&subtype=${state.subtype ? state.subtype : ""}`).then(response => {
            setCards(response.data.cards)
        })
    }


    function onSelected(event) {
        setState({...state, [event.target.name]: event.target.value});
    }

    if (state.isLoading) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div className={styles.wraper}>

                <header className={styles.header}>
                    <div className={styles.logout} onClick={logout}>
                        Logout
                    </div>
                </header>
                <div className={styles.content}>
                    <div className={styles.pannel}>
                        <div className={`${styles.categorySelect} ${styles.type}`}>
                            <select name="type" id="" defaultValue="" className={styles.select} onChange={onSelected}>
                                <option value="" selected disabled hidden>Type</option>
                                {state.types.map((item) => <option value={item} key={item}>{item}</option>)}
                            </select>
                            <span className={styles.categoryLabel}>
                                <img src={arrowMini} className={styles.arrowMini}/>
                            </span>
                        </div>

                        <div className={styles.categorySelect}>
                            <select name="subtype" id="" defaultValue="" className={styles.select}
                                    onChange={onSelected}>
                                <option value="" selected disabled hidden>Subtype</option>
                                {state.subtypes.map((item) => <option value={item} key={item}>{item}</option>)}
                            </select>
                            <span className={styles.categoryLabel}>
                                <img src={arrowMini} className={styles.arrowMini}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.main}>
                        {cards.map((item) => <NavLink key={item.id} to={`/card/${item.id}`}><img
                            className={styles.smallPic} key={item.id} src={item.imageUrl} alt=""/></NavLink>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;