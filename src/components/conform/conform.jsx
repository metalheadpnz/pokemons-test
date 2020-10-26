import React, {useEffect, useState} from "react";
import styles from "../login/login.module.css";
import arrowLoginBtn from "../../img/arrowBtn.svg";

function Conform() {

    function createOTP() {
        console.log('OTP')
        return Math.floor(1000 + Math.random() * (9999 + 1 - 1000))

    }

    function OTPOnClick() {
        if (state.input == state.OTP) {
            setState({
                ...state, conform: true, errorClass: null
            })
            console.log('correct password')
        } else {
            setState({...state, errorClass: styles.error})
            console.log('incorrect password')
        }
    }

    function onInputChange(event) {
        setState({...state, input: event.target.value})
        console.log(event.target.value)
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
            console.log('effect')
        }, []
    )


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