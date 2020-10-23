import React from "react";
import styles from "../login/login.module.css";
import arrowLoginBtn from "../../img/arrowBtn.svg";

function Conform() {
    return (
        <div className={styles.wraper}>
            <form>
                <div className={`${styles.inputField} ${styles.positionLoginField}`}>
                    <label htmlFor="login" className={styles.label}>Code from SMS</label>
                    <input id="login" type="text" className={styles.input}/>
                </div>
                <img className={styles.arrowLoginBtn} src={arrowLoginBtn} alt=""/>
            </form>

        </div>
    )
}

export default Conform;