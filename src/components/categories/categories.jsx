import React, {useEffect, useState} from "react";
import styles from "./categories.module.css";
import arrowMini from "../../img/Arrow_mini.svg"
import CardMini from "../pokemonCardMini/pokemonCardMini";
import {Link, NavLink, Redirect} from "react-router-dom";
import Preloader from "../preloader/preloader";
import * as axios from "axios";

function Categories(props) {
    let [state, setState] = useState({isLoading: true})
    let [cards, setCards] = useState([]);

    // useEffect(() => {
    //     axios.get("https://api.pokemontcg.io/v1/types").then(response => {
    //         setState({...state, types: response.data.types});
    //         console.log(1);
    //         axios.get("https://api.pokemontcg.io/v1/subtypes").then(response => {
    //             setState({...state, subtypes: response.data.subtypes});
    //             console.log(2)
    //         })
    //     })
    //
    // }, [])


    // https://api.pokemontcg.io/v1/cards?types=Metal
    // useEffect(() => {
    //     // console.log(state)
    // })
    useEffect(getPokemonsCards, [state.type, state.subtype])
    useEffect(() => {
        axios.get("https://api.pokemontcg.io/v1/types").then(response => {
            // console.log(1);
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
        //https://api.pokemontcg.io/v1/cards?types=dragon&subtype=Basic EXAMPLE
        console.log(state.type)
        //types=${state.type}
        axios.get(`https://api.pokemontcg.io/v1/cards?types=${state.type ? state.type : ""}&subtype=${state.subtype ? state.subtype : ""}`).then(response => {
            setCards(response.data.cards)
        })
    }


    function onSelected(event) {
        // console.log(event.target.name);
        setState({...state, [event.target.name]: event.target.value});
        // console.log(state);
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

                {/*{console.log(!!cards)}*/}
                {/*{console.log(cards)}*/}

                {/*{cards.map((item)=><div>{item.name} {item.types} {item.subtype}</div>)}*/}


                <div className={styles.content}>
                    <div className={styles.pannel}>
                        <div className={`${styles.categorySelect} ${styles.type}`}>
                            <select name="type" id="" className={styles.select} onChange={onSelected}>
                                {state.types.map((item) => <option value={item} key={item}>{item}</option>)}
                            </select>
                            <span className={styles.categoryLabel}>
                                <img src={arrowMini} className={styles.arrowMini}/>
                            </span>
                        </div>

                        <div className={styles.categorySelect}>
                            <select name="subtype" id="" className={styles.select} onChange={onSelected}>
                                {state.subtypes.map((item) => <option value={item} key={item}>{item}</option>)}
                            </select>
                            <span className={styles.categoryLabel}>
                                <img src={arrowMini} className={styles.arrowMini}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.main}>
                        {cards.map((item) => <NavLink key={item.id} to={`/card/${item.id}` }><img
                            className={styles.smallPic} key={item.id} src={item.imageUrl} alt=""/></NavLink>)}

                        {/*    <Link to={{*/}
                        {/*    pathname: '/test',*/}
                        {/*    state: { data: myData }*/}
                        {/*}}/>*/}
                        {/*<CardMini/>*/}

                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;