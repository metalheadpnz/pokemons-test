import React from 'react';
import styles from './login.module.css';
import arrowLoginBtn from '../../img/arrowBtn.svg'

function Login() {
    return (
        <div className={styles.wraper}>
            <form>
                <div className={`${styles.inputField} ${styles.positionLoginField}`}>
                    <label for="login" className={styles.label}>Login</label>
                    <input id="login" type="text" className={styles.input}/>
                </div>
                <div className={`${styles.inputField} ${styles.positionPasswordField}`}>
                    <label for="pass" className={styles.label}>Password</label>
                    <input type="password" name="пароль" id="pass" className={styles.input}/>
                </div>
                <img className={styles.arrowLoginBtn} src={arrowLoginBtn} alt=""/>
            </form>
        </div>
    )
}

export default Login;