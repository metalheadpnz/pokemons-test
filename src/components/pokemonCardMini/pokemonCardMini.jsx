import React from "react";
import styles from "./pokemonCardMini.module.css"

function CardMini() {
    return (
        <div className={styles.cardMini}>
            <div className={styles.miniPic}></div>
            <div className={styles.pokemonData}>Pokemon name</div>
            <div className={styles.pokemonData}>Artist</div>

        </div>
    )
}

export default CardMini;