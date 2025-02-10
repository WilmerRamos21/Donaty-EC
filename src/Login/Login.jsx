import './Login.css'

import LogoDonaty from '/src/assets/Imagen1.png'
import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';

import { useState } from "react"
import {NavLink, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../firebase";

const Login = () =>{
        //Paso 1
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const navigate = useNavigate("");
        //Paso 3
        const handleLogin = async (e) =>{
            e.preventDefault();
            try{
                await signInWithEmailAndPassword(authFirebase,email,password);
                navigate("/services");
            }catch(error){
                alert(error);
            }
        }
    return (
        <>
        <div className='body2'>
            <header className = "header3">
                <div className = "menu_container">
                    <div className = "logo">
                        <img src={LogoDonaty} alt="Logo_donaty" />
                    </div> 
                    <Hamburguesa/>
                </div>
            </header>

            <main className='contenido_principal container1'>
            <h2 className="text-center">Inicio de sesión</h2>
            <form className="formulario" onSubmit={handleLogin}>
            <fieldset>
                    <legend>Ingresa tus datos</legend>
                    <div className='campo'>
                        <label>E-mail: </label>
                        <input type="email" placeholder="Tu Email" required
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className='campo'>
                        <label>Contraseña: </label>
                        <input type="password" placeholder="Tu contraseña" required
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <input className="btn-enviar" type="submit" value="Enviar" ></input>
                    </fieldset>
            </form>
            <NavLink to="/register" className="enlace_1">Si no tienes cuenta, puedes registrarte aquí</NavLink>
            </main>

            <footer className="footer">
                <div className="footer-container">
            
                    <nav className="footer-section">
                    <NavLink to="/politicsterms" className="footer-link">Políticas de Privacidad</NavLink> |
                    <NavLink to="/politicsterms" className="footer-link">Términos de Uso</NavLink>
                    </nav>
                    
                    
                    <div className="footer-section">
                        <p>© DONATY-EC. Todos los derechos reservados.</p>
                    </div>
                    
            
                    <div className="footer-section social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61570160151308" target="_blank">
                            <img src= {Facebook} alt="Facebook" className="social-icon"/>
                        </a>
                        <a href= "https://wa.me/983203628" target="_blank">
                            <img src= {Whats} alt="WhatsApp" className="social-icon"/>
                        </a>
                        <a href="https://www.instagram.com/donatyecuador/" target="_blank">
                            <img src= {Insta} alt="Instagram" className="social-icon"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
        </>

    )
}

export default Login;