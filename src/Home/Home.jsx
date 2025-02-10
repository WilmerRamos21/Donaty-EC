import './Home.css'


import LogoDonaty from '/src/assets/Imagen1.png'
import Juguetes from '/src/assets/Imagen2.png'
import ComidaVegetales from '/src/assets/Imagen4.png'
import Ropa from '/src/assets/Imagen5.png'
import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';


import {useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { dbFirebase } from "../firebase";
import { NavLink } from 'react-router-dom'

const Home = () => {

        const [donaciones, setDonaciones] = useState([])
        const obtenerDatos = async () =>{
            try{
                const snapshot = await getDocs(collection(dbFirebase, "donaciones"));
                const documentos = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }));
                setDonaciones(documentos);
            }catch(error){
                toast.error(error);
                console.log(error);
            }
        }
        useEffect(()=>{
            obtenerDatos()
        }, [])

    return (
        <>
            <header className = "header">
                <div className = "menu_container">
                    <div className = "logo_donaty">
                    <img src={LogoDonaty} alt="Logo_donaty" />
                    </div>
                    <Hamburguesa/>
                </div>

                <div className = "header-content">
                    <h1>DONATY-EC</h1>
                <p>Uniendo corazones, cambiando vidas. 
                <br/>
                "El amor, el apoyo y la amabilidad vienen como regalos con envoltura de esperanza de personas que no conocemos".</p>
                </div>
            </header>

            <section className="coffee">
                <div className="coffee-content">
                    <h2>Categorías</h2>
                    <p className="txt-parrafo">
                        "El amor es donar tu alma a otro".
                    </p>
                    <div className="coffee-group">
                        <div className="coffee-1">
                            <img src= {Juguetes} alt="juguetes"/>
                            <h3 className="titulo-bebida">Juguetes</h3>
                            <p className="texto-bebida">¡Haz la diferencia en la vida de un niño!

                                Este año, te invitamos a donar un juguete nuevo o en buen estado para aquellos que no tienen la oportunidad de recibir uno. Tu generosidad puede iluminar su día y brindarles una sonrisa que nunca olvidarán.</p>
                        </div>
                        <div className="coffee-1">
                            <img src= {ComidaVegetales} alt="comida"/>
                            <h3 className="titulo-bebida">Alimentos</h3>
                            <p className="texto-bebida">¡Tu generosidad puede transformar vidas!

                                Te invitamos a donar alimentos no perecederos para niños que necesitan tu ayuda. Con tu apoyo, podemos garantizar que muchos pequeños tengan una comida nutritiva y saludable.</p>
                        </div>
                        <div className="coffee-1">
                            <img src= {Ropa} alt="ropa"/>
                            <h3 className="titulo-bebida">Vestimenta</h3>
                            <p className="texto-bebida">¡Haz que un niño se sienta especial!

                                Te invitamos a donar ropa en buen estado para niños que lo necesitan. Con tu apoyo, podemos ofrecerles prendas cómodas y cálidas que les brinden alegría y dignidad.</p>
                        </div>
                    </div>
                </div>
            </section>    

            <section className='container_1'>
                <div className='donations'>
                    <h2 className='title-donations'>Donaciones realizadas por la comunidad de Donaty</h2>
                </div>
                <section className='routes-section_1'>
                {
                    donaciones ? "" : <div className='no-routes_1'>No hay donaciones que mostrar, se el primero</div>
                }
                {
                    donaciones.map((donacion) =>(
                        <div className="route-card_1" key={donacion.id}>
                            <img src={donacion.fotos} alt="donacion" className='route-img_1'/>
                            <div className='route-info_1'>
                                <p>Nombre del donante: {donacion.nombre} </p>
                                <p>Tipo de donación: {donacion.tipoDonacion}</p>
                                <p>Comentario hecho por el usuario: {donacion.comentarios}</p>
                            </div>
                        </div>
                    ))
                }
                </section>

            </section>

            <section className="video-section">
                <h1 className="video-title">Descubre cómo juntos hemos transformado la vida de muchos niños, llevando esperanza a su día a día.</h1>
                <p className="video-description">¡Únete a nosotros y sé parte de este hermoso cambio!</p>
                <div className="video-container">
                <iframe className="video" 
                src="https://www.youtube.com/embed/4INwx_tmTKw?start=304&autoplay=1&mute=1&loop=1&playlist=4INwx_tmTKw" 
                frameBorder="0" 
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>

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

export default Home;