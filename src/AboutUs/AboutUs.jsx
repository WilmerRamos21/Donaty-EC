import './AboutUs.css';
import LogoDonaty from '/src/assets/Imagen1.png';
import Facebook from '/src/assets/facebook.png';
import Whats from '/src/assets/whatsapp.png';
import Insta from '/src/assets/instagram.png';
import MapsComponent from '../Maps/Maps.jsx';
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <section className='body'>
                <header className="header3">
                    <div className="menu_container">
                        <div className="logo">
                            <img src={LogoDonaty} alt="Logo_donaty" />
                        </div>
                        <Hamburguesa/>
                    </div>
                </header>
                <section className="conocenos">
                    <h2 className='text-center'>Sobre nosotros</h2>
                    <p className='conocenos-p'>"La Fundación DONATY-EC es una organización sin ánimo de lucro comprometida con mejorar la calidad de vida de niños que padecen cáncer y sus familias. Creemos firmemente en el derecho de cada niño a disfrutar de una infancia feliz y llena de esperanza. Para lograrlo, ofrecemos una amplia gama de programas que brindan apoyo emocional y financiero a lo largo de todo el proceso de tratamiento."</p>
                </section>
                <section className="sucursales">
                    {/* Sucursal Sur */}
                    <div className="sucursal">
                        <h3>Sucursal sur</h3>
                        <div className="map-container">
                            <MapsComponent
                                id="sucursal-sur" // ID único
                                latitude={-0.239338}
                                longitude={-78.523049}
                                description="Av. Rodrigo de Chávez y 5 de Junio, Quito, Ecuador"
                            />
                        </div>
                        <p>Al sur nos encuentras en la villaflora, Av. Rodrigo de Chávez y 5 de Junio, frente al Parque de las Flores.</p>
                    </div>

                    {/* Sucursal Centro */}
                    <div className="sucursal">
                        <h3>Sucursal centro</h3>
                        <div className="map-container">
                            <MapsComponent
                                id="sucursal-centro" // ID único
                                latitude={-0.219463}
                                longitude={-78.514815}
                                description="Plaza Santo Domingo, Av. Eugenio Espejo y Juan Pío Montúfar"
                            />
                        </div>
                        <p>En el centro nos encuentras en la Plaza Santo Domingo, Av. Eugenio Espejo y Juan Pío Montúfar.</p>
                    </div>

                    {/* Sucursal Norte */}
                    <div className="sucursal">
                        <h3>Sucursal norte</h3>
                        <div className="map-container">
                            <MapsComponent
                                id="sucursal-norte" // ID único
                                latitude={-0.2035508}
                                longitude={-78.48322675}
                                description="Plaza Artigas, Av. 12 de octubre y Av. Coruña"
                            />
                        </div>
                        <p>En el norte nos encuentras en la Plaza Artigas, Av. 12 de octubre y Av. Coruña.</p>
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
                                <img src={Facebook} alt="Facebook" className="social-icon" />
                            </a>
                            <a href="https://wa.me/983203628" target="_blank">
                                <img src={Whats} alt="WhatsApp" className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/donatyecuador/" target="_blank">
                                <img src={Insta} alt="Instagram" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default AboutUs;