import './Register.css'
import LogoDonaty1 from '/src/assets/Imagen1.png'
import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';

import { useState } from "react";


const Register = () =>{

    const navigate = useNavigate("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");

    const handleRegister = async (e) =>{
        e.preventDefault();
        try{
            //Exito
            await createUserWithEmailAndPassword(authFirebase,email,password);
            const user = authFirebase.currentUser;
            if (user){
                await setDoc(doc(dbFirebase,"Users",user.uid),{
                    email:user.email,
                    fullname:fname,
                    rol: "admin",
                });
            }
            navigate("/login");
        }catch(error){
            //Error
            console.log(error);
            alert(error);
        }
    }

    return (
        <>
            <header className = "header1">
                <div className = "menu_container1">
                    <div className = "logo_donaty">
                        <img src={LogoDonaty1} alt="Logo_donaty" />
                    </div>
                    <Hamburguesa/>
                </div>

                <div className = "header-content">
                    <h1>¡Únete a nosotros y sé parte de este hermoso cambio!</h1>
                    <p>Juntos podemos llevar esperanza y alegría a los niños que más lo necesitan. Con tu apoyo, no solo donamos juguetes, ropa y alimentos, sino también sonrisas y oportunidades. Sé parte de un equipo comprometido con el cambio y descubre cómo pequeños gestos pueden transformar vidas. ¡Tu ayuda es el regalo más valioso!</p>
                </div>
            </header>
            <section>
                <div className='text_content'>
                    <div className='text-center'>
                        <h2>Los requisitos para unirse a nuestro equipo son simples:</h2>
                    </div>
                    <div className='text_content'>
                        <p>1. Compromiso y solidaridad para ayudar a quienes más lo necesitan.</p>
                        <p>2. Disponibilidad de tiempo para participar en actividades de recolección y entrega.</p>
                        <p>3. Actitud positiva y trabajo en equipo.</p>
                        <p>4. Responsabilidad para cumplir con las tareas asignadas.</p>
                        <p>5. Donación de talento o recursos, según tus posibilidades.</p>
                    </div>
                    <h4 className='text-center'>¡No se requiere experiencia previa, solo el deseo de hacer el bien!</h4>
                </div>
            </section>
            <section className='contenido_principal container'>
                <form className='formulario' onSubmit={handleRegister}>
                    <fieldset>
                    <legend>Ingresa tus datos</legend>
                    <div className='campo'>
                        <label>Nombre: </label>
                        <input type="text" placeholder="Tu Nombre" required 
                        onChange={(e)=>{setFname(e.target.value)}}/>
                    </div>
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
                <NavLink to="/login" className="enlace_1">Si ya tienes cuenta, puedes iniciar sesión aquí</NavLink>
            </section>
            <footer className="footer">
                <div className="footer-container">
            
                    <nav className="footer-section">
                    <NavLink to="/politicsterms" className="footer-link">Políticas de Privacidad</NavLink>
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
        </>
    )
} 

export default Register;