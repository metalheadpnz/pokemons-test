import React from "react";
import styles from "./categories.module.css";
import arrowMini from "../../img/Arrow_mini.svg"
import CardMini from "../pokemonCardMini/pokemonCardMini";

function Categories() {
    return (
        <div className={styles.wraper}>
            <header className={styles.header}>
                <div className={styles.logout}>
                    Logout
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.pannel}>
                    <div className={`${styles.categorySelect} ${styles.type}`}>
                        <div className={styles.categoryLabel}>
                            Type
                            <img src={arrowMini} className={styles.arrowMini}/>
                        </div>
                    </div>
                    <div className={styles.categorySelect}>
                        <div className={styles.categoryLabel}>
                            Subtype
                            <img src={arrowMini} className={styles.arrowMini}/>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <CardMini/>
                </div>
            </div>
        </div>
    )
}

export default Categories;