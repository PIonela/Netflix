import "./register.scss";
import { useState, useRef } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimeted movies</h1>
                <h2>Watch anywhere</h2>
                <p>Ready to watch?</p>

                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart} >Get Started</button>
                    </div>
                ) : (
                        <div className="input">
                            <input type="password" placeholder="password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish} >Start</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Register
