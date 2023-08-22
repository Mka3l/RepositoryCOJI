
import style from  "./assets/css/login.css";
import sary from "./assets/img/fleche.png";

const Login = () =>{ 
    return (
        <main>
        <div class="formulaire">
            <span class="borderLine"></span>
            <form action="">
                <div class="inputBox">
                    <input type="text" required="required"/>
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required"/>
                    <span>Password</span>
                    <i></i>
                </div> 
                <div class="links">
                    <input type="checkbox" name="" id=""/>
                    <p href="#">Enregistrer Login</p>
                    <a href="./forgot.html">Forgot password</a>
                </div>
                <input type="submit" value="Login"/>
            </form>
            <div class="sign_up">
                <a href="#">
                    <p>Inscrire</p>
                    <span><img src={sary} alt=""/></span>
                </a>
            </div>
            
        </div>
    </main>
    )
};
export default Login;
