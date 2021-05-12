import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //it prevents page from refresh on clicking sign-in

        auth
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                history.push('./');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //using firebase
        auth
            .createUserWithEmailAndPassword(email, password)
            .then( (auth) => {
                //successfully created a new user 
                console.log(auth)
                if (auth){
                    history.push('./')
                }
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="amazon logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)
                    } />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        e => setPassword(e.target.value)
                    } />
 
                    <button type="submit" onClick={signIn} className="login__signIn">Sign-In to Continue</button>

                </form>

                <p>
                    By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
                </p>
               
            </div>

            <div className="login__Register">
                <p>New to Amazon Clone?</p>
                <button onClick={register} className="login__Register__Account">Create Your Amazon Clone Account</button>
            </div>

        </div>
    )
}

export default Login
