import './Services.css'

import LogoDonaty from '/src/assets/Imagen1.png'
import Facebook from '/src/assets/facebook.png'
import Whats from '/src/assets/whatsapp.png'
import Insta from '/src/assets/instagram.png'
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { authFirebase, dbFirebase } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import Hamburguesa from '/src/Components/Hamburguesa/Hamburguesa.jsx';
import { NavLink } from 'react-router-dom'


const Services = () =>{


    const [donaciones, setDonaciones] = useState([])

    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        direccion: "",
        referenciaDireccion: "",
        tipoDonacion: "",
        fotos: "",
        tipoVehiculo: "",
        comentarios: "",
        fecha: "",
        hora: "",
        terminosCondiciones: false,
    })

    const [id, setId] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setForm(() => ({
        ...form,
        [name]  : type === "checkbox" ? checked 
                : type === "file" ? (files.length > 0 ? files [0]: null) 
                : value,
        }))
    }
    //handleSubmit = hacerDonaciones
    const hacerDonacion = async (e) => {
        e.preventDefault()
        try{
            
            if(id){
                await updateDoc(doc(dbFirebase, "donaciones",id),form)
                toast.success("Registro de donación actualizada de forma correcta.")
                setForm({
                    nombre: "",
                    telefono: "",
                    direccion: "",
                    referenciaDireccion: "",
                    tipoDonacion: "",
                    fotos: "",
                    tipoVehiculo: "",
                    comentarios: "",
                    fecha: "",
                    hora: "",
                    terminosCondiciones: false,
                })
                setId("")
            }
            else{
                await addDoc(collection(dbFirebase, "donaciones"), form)
                toast.success("Registro de donación realizada de forma correcta.")
                setForm({
                    nombre: "",
                    telefono: "",
                    direccion: "",
                    referenciaDireccion: "",
                    tipoDonacion: "",
                    fotos: "",
                    tipoVehiculo: "",
                    comentarios: "",
                    fecha: "",
                    hora: "",
                    terminosCondiciones: false,
                })
            }
        } catch (error){
            toast.error("Error al procesar la donación.");
            console.log(error);
        }
    }

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

    console.log(donaciones);
    
    useEffect(()=>{
        obtenerDatos()
    }, [])

    const cargarDatos = (donacion) =>{
        setForm({
            nombre: donacion.nombre || "",
            telefono: donacion.telefono || "",
            direccion: donacion.direccion || "",
            referenciaDireccion: donacion.referenciaDireccion || "",
            tipoDonacion: donacion.tipoDonacion || "",
            fotos: donacion.fotos || "",
            tipoVehiculo: donacion.tipoVehiculo || "",
            comentarios: donacion.comentarios || "",
            fecha: donacion.fecha || "",
            hora: donacion.hora || "",
            terminosCondiciones: donacion.terminosCondiciones ?? false
        })
        setId(donacion.id)
    }

    const eliminarDatos = async (id) =>{
        const confirmar = confirm("Estas apunto de eliminar este registro, estas seguro?")
        if (confirmar){
            console.log("ID a eliminar: ",id);
            
            try{
                const userDoc = doc(dbFirebase, 'donaciones',id);
                await deleteDoc(userDoc);
                toast.success("Registro de eliminación eliminado de forma correcta")
                obtenerDatos()
            }catch(error){
                toast.error("Error al eliminar el registro de donación")
                console.log("Error al eliminar", error);
                
            }
        }
    }


    const validateDate = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            toast.error("La fecha debe ser actual o posterior a ella.");
            setForm({ ...form, fecha: "" });
        } else {
            setForm({ ...form, fecha: e.target.value });
        }
    }
    
    const validateTime = (e) => {
        const [hours, minutes] = e.target.value.split(":").map(Number);
        if (hours < 8 || hours > 20) {
            toast.error("El horario permitido es entre 08:00 y 20:00.");
            setForm({ ...form, hora: "" });
        } else {
            setForm({ ...form, hora: e.target.value });
        }
    }

    return(
        <>
        <ToastContainer/>
        <header className = "header3">
                <div className = "menu_container">
                    <div className = "logo_donaty">
                        <img src={LogoDonaty} alt="Logo_donaty" />
                    </div>
                    <Hamburguesa/>
                </div>
        </header>
        <section className='section_donations'>
            <section className='form-donations'>
                <h4>Donaciones</h4>
                <p>Formulario para realizar donaciones</p>

                <form className='route-form' onSubmit={hacerDonacion}>

                    <label>Nombre: </label>
                    <input type="text" placeholder="Nombre y apellido del usuario"
                        name='nombre'
                        value={form.nombre || ""}
                        onChange={handleChange}
                        required/>

                    <label>Teléfono: </label>
                    <input type='number' placeholder='Numero de contacto'
                        name='telefono'
                        value={form.telefono || ""}
                        onChange={handleChange}
                        required/>

                    <label>Dirección: </label>
                    <input type="text" placeholder='Dirección de encuentro'
                        name='direccion'
                        value={form.direccion || ""}
                        onChange={handleChange}
                        required/>

                    <label>Referencia de dirección:</label>
                    <input type="text" placeholder='Ejemplo: cerca del parque'
                        name='referenciaDireccion'
                        value={form.referenciaDireccion || ""}
                        onChange={handleChange}
                        required/>

                    <label>Tipo de donación: 
                    <select
                        name='tipoDonacion'
                        value={form.tipoDonacion || ""}
                        onChange={handleChange}
                        required>
                        <option value="">Selecione una opción</option>
                        <option value="Ropa">Ropa</option>
                        <option value="Comida">Comida</option>
                        <option value="Juguetes">Juguetes</option>
                    </select>
                    </label>

                    <label>Foto de la donación:</label>
                    <input type="url" placeholder='url de la imagen de la donación'
                        name='fotos'
                        value={form.fotos || ""}
                        onChange={handleChange}
                        required/>

                    <label>Tipo de vehiculo: 
                        <select 
                            name='tipoVehiculo'
                            value={form.tipoVehiculo || ""}
                            onChange={handleChange}
                            required>
                            <option value="">Selecciona un vehículo</option>
                            <option value="camion">Camión</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </label>

                    <label>Comentarios adicionales: </label>
                    <textarea placeholder='Añade un comentario...'
                        name='comentarios'
                        value={form.comentarios || ""}
                        onChange={handleChange}
                        />

                    <label>Fecha de entrega: </label>
                    <input type='date' 
                        name='fecha'
                        value={form.fecha || ""}
                        onChange={validateDate}
                        required/>

                    <label>Hora de entrega: </label>
                    <input type='time' 
                        name='hora'
                        value={form.hora || ""}
                        onChange={validateTime}
                        required/>

                    <label>Acepto los términos y condiciones </label>
                    <input type="checkbox" 
                        name='terminosCondiciones'
                        checked={form.terminosCondiciones ?? false}
                        onChange={handleChange}/>

                    <input  
                        className="btn" 
                        type="submit"
                        disabled= {!form.terminosCondiciones}
                        value={id ? "Actualizar información" : "Enviar formulario de donación"}
                        >
                    </input>
                </form>
            </section>

            <section className='routes-section'>
                <h4>Donaciones realizadas por los usuarios</h4>
                <p>Sección de donaciones</p>
                {
                    donaciones ? "" : <div className='no-routes'>No hay donaciones que mostrar, se el primero</div>
                }
                {
                    donaciones.map((donacion) =>(
                        <div className="route-card" key={donacion.id}>
                            <img src={donacion.fotos} alt="donacion" className='route-img'/>
                            <div className='route-info'>
                                <p>Nombre del donante: {donacion.nombre}</p>
                                <p>Tipo de donación: {donacion.tipoDonacion}</p>
                                <p>Comentario proporcionado por el usuario: {donacion.comentarios}</p>
                            </div>
                            <div className='route-actions'>
                                <button className='update-btn' onClick={()=>{cargarDatos(donacion)}}>
                                    Actualizar información
                                </button>
                                <button className='delete-btn' onClick={()=>{eliminarDatos(donacion.id)}}>
                                    Eliminar registro de Donación
                                </button>
                            </div>
                        </div>
                    ))
                }
            </section>
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

export default Services;