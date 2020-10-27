import React, {useState} from 'react';
import styles from './login.module.css';
import arrowLoginBtn from '../../img/arrowBtn.svg'
import {Redirect} from "react-router-dom";

function Login(props) {
    let [state, setState] = useState({
        login: "KODE",
        pass: "123",
        errorClass: null
    })

    function updatePass(event) {
        setState({...state, pass: event.target.value})
    }

    function updateLogin(event) {
        setState({...state, login: event.target.value})
    }

    let loginOnClick = () => {
        if (state.login == "KODE" && state.pass == 123) {
            setState({...state, errorClass: null})
            props.setAuth(true)
        }
        else {
            setState({...state, errorClass: styles.error})
        }
    }
    if (props.auth) return <Redirect to={"/conform"}/>

    return (
        <>
            <div className={styles.wrap}>
                <div className={`${styles.inputField} ${styles.positionLoginField} ${state.errorClass}`}>
                    <label htmlFor="login" className={styles.label}>Login</label>
                    <input id="login" type="text" className={styles.input} value={state.login} onChange={updateLogin}/>
                </div>
                <div className={`${styles.inputField} ${styles.positionPasswordField} ${state.errorClass}`}>
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input type="password" name="пароль" id="pass" className={styles.input} value={state.pass}
                           onChange={updatePass}/>
                </div>
                <img className={styles.arrowLoginBtn} src={arrowLoginBtn} onClick={loginOnClick}/>
            </div>
        </>
    )
}

export default Login;