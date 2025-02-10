import './Categories.css'

import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import Desayuno4 from '/src/assets/0000000.png'
import Ropa from '/src/assets/Imagen5.png'
import ComidaVegetales from '/src/assets/Imagen4.png'
import Juguetes from '/src/assets/Imagen2.png'
import LogoDonaty from '/src/assets/Imagen1.png'
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';
import { NavLink } from 'react-router-dom'


const Categories = () =>{
    return(
        <>
        <main className='container_color'>
            <header className = "header2">
                <div className = "menu_container">
                    <div className = "logo_donaty">
                        <img src={LogoDonaty} alt="Logo_donaty" />
                    </div>
                    <Hamburguesa/>
                </div>
            </header>
            <section id="menu">
            <h2 className='text-center'>CATEGORIAS</h2>
            <div className="menu-section">
                <div className="menu-items">
                    <div className="item">
                        <img src= {Juguetes} alt="JUGUETES"/>
                        <h3>JUGUETES</h3>
                        <p>Los juguetes que se pueden donar incluyen peluches en buen estado, juegos de mesa completos, rompecabezas, muñecas, figuras de acción, bloques de construcción como LEGO, carros de juguete, pelotas, libros infantiles, instrumentos musicales pequeños como xilófonos o maracas, y materiales educativos como crayones o plastilina. Es importante que los juguetes estén limpios, funcionales y no presenten piezas pequeñas peligrosas si van dirigidos a niños pequeños.</p>
                    </div>
                    <div className="item">
                            <img src= {ComidaVegetales} alt="ALIMENTOS"/>
                        <h3>ALIMENTOS</h3>
                        <p>Los alimentos que se pueden donar incluyen productos no perecederos como arroz, pasta, legumbres, enlatados (atún, sardinas, frijoles), aceite, harina, leche en polvo, cereales, galletas, azúcar, sal y café. También se pueden incluir alimentos básicos como conservas de frutas, puré de tomate, sopas instantáneas y alimentos para bebés. Es fundamental que los productos estén bien sellados, en buen estado y con una fecha de caducidad adecuada.</p>
                    </div>
                    <div className="item">
                        <img src= {Ropa} alt="VESTIMENTA"/>
                        <h3>VESTIMENTA</h3>
                        <p>La vestimenta que se puede donar incluye ropa en buen estado como camisetas, pantalones, abrigos, suéteres, vestidos, faldas, camisas, chaquetas, ropa interior nueva, calcetines, zapatos, sandalias y zapatillas. También se pueden donar accesorios como bufandas, guantes, gorros, cinturones y mochilas. Es importante que las prendas estén limpias, sin roturas ni manchas, y que los zapatos estén en condiciones funcionales para garantizar su utilidad.</p>
                    </div>
                    <div className="item">
                        <img src= {Desayuno4} alt="Desayuno 4"/>
                        <h3>RECOMENDACIONES</h3>
                        <p>Asegúrate de que los artículos estén en buen estado, limpios y funcionales. Clasifica las donaciones, revisa la fecha de caducidad de los alimentos y evita objetos dañados. Consulta las necesidades de la organización y empaqueta todo de forma segura.</p>
                    </div>
                </div>
            </div>
        </section>
        <section/>

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
            </main>
        </>
    )
}

export default Categories;