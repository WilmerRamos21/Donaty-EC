import './Politicas.css'

import LogoDonaty1 from '/src/assets/Imagen1.png'
import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';
import { NavLink } from 'react-router-dom'

const Politicas = () =>{
    return (
        <>
            <header className = "header1">
                <div className = "menu_container1">
                    <div className = "logo_donaty">
                        <img src={LogoDonaty1} alt="Logo_donaty" />
                    </div>
                    <Hamburguesa/>
                </div>
            </header>

            <section>
                <div className='politicsAndTerms'>
                    <div className='politics_container'>
                        <div className='politics_text'>
                            <h2>Políticas de Privacidad</h2>
                            <h3>1. Recopilación de Datos</h3>
                            <p>Recopilamos información como nombre, correo y dirección solo para gestionar las donaciones.</p>
                            <h3>2. Uso de la Información</h3>
                            <p>Los datos se usan exclusivamente para coordinar donaciones y mejorar nuestros servicios. No compartimos información con terceros sin consentimiento.</p>
                            <h3>3. Derechos del Usuario</h3>
                            <p>Puedes solicitar la modificación o eliminación de tus datos enviándonos un mensaje.</p>
                            <h3>4. Cambios en la Política</h3>
                            <p>Nos reservamos el derecho de modificar estas políticas y te informaremos en caso de cambios importantes.</p>
                        </div>
                    </div>
                    <div className='terms_container'>
                        <div className='terms_text'>
                            <h2>Términos de Uso</h2>
                            <h3>1. Uso del Sitio</h3>
                            <p>Donat-Ec es una plataforma para gestionar donaciones. Debes usarla de manera responsable y respetuosa.</p>
                            <h3>2. Registro y Responsabilidad</h3>
                            <p>Al registrarte, garantizas que la información proporcionada es verídica y te comprometes a no usar la plataforma para actividades fraudulentas.</p>
                            <h3>3. Donaciones</h3>
                            <p>Solo se aceptan donaciones en buen estado. No nos hacemos responsables por artículos dañados o no entregados.</p>
                            <h3>4. Limitación de Responsabilidad</h3>
                            <p>No garantizamos el funcionamiento ininterrumpido del sitio y no somos responsables por problemas técnicos o de terceros.</p>
                            <h3>5. Modificación de los Términos</h3>
                            <p>Podemos actualizar estos términos en cualquier momento, y el uso continuado del sitio implica tu aceptación de los cambios.</p>
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    )
}

export default Politicas;