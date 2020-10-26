import React from 'react';
import styles from './login.module.css';
import arrowLoginBtn from '../../img/arrowBtn.svg'
import {Redirect} from "react-router-dom";
import Categories from "../categories/categories";
import Conform from "../conform/conform";

function Login(props) {
    console.log('render');
    let [login, setLogin] = React.useState("KODE")

    function updateLogin(event) {
        setLogin(event.target.value)
        // console.log(event.target.value)
    }

    let [pass, setPass] = React.useState(123)

    function updatePass(event) {
        setPass(event.target.value)
        // console.log(pass)
    }

    let loginOnClick = () => {
        if (login == "KODE") {
            props.setAuth(true);
        }
    }


    return (
        <>
            {!props.auth
                ? <div className={styles.wrap}>
                    <div className={`${styles.inputField} ${styles.positionLoginField}`}>
                        <label htmlFor="login" className={styles.label}>Login</label>
                        <input id="login" type="text" className={styles.input} value={login} onChange={updateLogin}/>
                    </div>
                    <div className={`${styles.inputField} ${styles.positionPasswordField}`}>
                        <label htmlFor="pass" className={styles.label}>Password</label>
                        <input type="password" name="пароль" id="pass" className={styles.input} value={pass}
                               onChange={updatePass}/>
                    </div>
                    <img className={styles.arrowLoginBtn} src={arrowLoginBtn} onClick={loginOnClick}/>
                </div>
                : <Conform/>}
        </>
    )
}

export default Login;