import React, {useEffect, useState} from "react";
import styles from "../login/login.module.css";
import arrowLoginBtn from "../../img/arrowBtn.svg";
import {Redirect} from "react-router-dom";

function Conform(props) {

    function createOTP() {
        return Math.floor(1000 + Math.random() * (9999 + 1 - 1000))
    }

    function OTPOnClick() {
        if (state.input == state.OTP) {
            setState({
                ...state, conform: true, errorClass: null
            })

        } else {
            setState({...state, errorClass: styles.error})
        }
    }

    function onInputChange(event) {
        setState({...state, input: event.target.value})
    }

    let [state, setState] = useState({
        OTP: 9999,
        input: "",
        conform: false,
        errorClass: null
    });

    useEffect(() => {
            // createOTP();
            setState({...state, OTP: createOTP()});
        }, []
    )

    if (state.conform) return <Redirect to={"/categories"}/>
    if (!props.auth) return <Redirect to={"/login"}/>

    return (
        <>
            <div className={styles.wrap}>
                <div className={`${styles.inputField} ${styles.positionLoginField} ${state.errorClass}`}>
                    <label htmlFor="login" className={styles.label}>Code from SMS {state.OTP}</label>
                    <input id="login" type="text" className={styles.input} value={state.input}
                           onChange={onInputChange}/>
                </div>
                <img className={styles.arrowLoginBtn} src={arrowLoginBtn} onClick={OTPOnClick}/>
            </div>
        </>
    )
}

export default Conform;