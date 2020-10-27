import React, {useEffect} from "react";
import styles from "./pokemonCard.module.css";

/*    useEffect(() => {
            // createOTP();
            setState({...state, OTP: createOTP()});
        }, []
    )
*/

function PokemonCard() {
    useEffect(()=> {
        console.log('effect')
    }, [])

    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <div className={styles.back}>{"<"} Back</div>
                <div className={styles.logout}>Logout</div>
            </header>
            <div className={styles.contentContainer}>
                <div className={styles.leftPanel}>
                    <div className={styles.bigPic}></div>
                    <div className={styles.description}>
                        Does 30 damage plus 20 more damage for each Energy attached to Dark Blastoise but not used to
                        pay for this attack. You can't add more than 40 damage in this way.
                    </div>
                </div>
                <div className={styles.infoPanel}>
                    Pokemon name
                    <br/>
                    Type
                    <br/>
                    Subtype
                    <hr className={styles.hr}/>
                    attackDamage
                    <br/>
                    attackCost
                    <br/>
                    resistances
                    <br/>
                    evolvesFrom
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;