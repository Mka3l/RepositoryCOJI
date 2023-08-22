import React from 'react';
import sary from '../assets/img/fleche.png';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
const Login = () =>{ 
    const styly = {
        fontSize: '15pt',
        padding: '15px 50px 15px 50px',
        background: 'linear-gradient(45deg, #0d6efd, #fe00ec)',
        fontWeight: '400',
    }
    return ( 
        
        <main>
        <div className="formulaire">
            <span className="borderLine"></span>
            <form action="">
                <div className="inputBox">
                    <input type="text" required="required"/>
                    <span>Surnom</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required="required"/>
                    <span>Password</span>
                    <i></i>
                </div> 
                <div className="links">
                    <input type="checkbox" name="" id=""/>
                    <p href="#">Enregistrer Login</p>
                    <a href="./forgot.html">Forgot password</a>
                </div>

                <Link  to={"/page-de-base"}>
                    <input style={styly} className="linky" type="submit" value="Se Connecter" />
                </Link>
                
            </form>
            <div className="sign_up">
                <a to="/page-de-base" href="#">
                    <p>
                        inscrire
                    </p>
                    <span><img src={sary} alt=""/></span>
                </a>
            </div>
            
        </div>
    </main>
    )
};
export default Login;
