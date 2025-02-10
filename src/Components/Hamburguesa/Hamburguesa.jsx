import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Importa desde react-router-dom
import "./Hamburguesa.css";
import { authFirebase } from "../../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

const Hamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation(); // Obtiene la ruta actual

    // Verificar el estado del usuario en Firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
            setIsAuthenticated(!!user); // Si hay usuario, está autenticado
        });
        return () => unsubscribe(); // Limpiar suscripción cuando se desmonte
    }, []);

    // Cerrar el menú cuando cambie la ruta
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Función para cerrar sesión
    const handleLogout = async () => {
        try {
            await signOut(authFirebase);
            window.location.href = "/"; // Redirecciona al home después de cerrar sesión
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <nav className="menu_container">
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <div className={`navbar ${isOpen ? "active" : ""}`}>
                <NavLink to="/" onClick={() => setIsOpen(false)}>Inicio</NavLink>
                <NavLink to="/us" onClick={() => setIsOpen(false)}>Nosotros</NavLink>
                <NavLink to="/categories" onClick={() => setIsOpen(false)}>Categorías</NavLink>
                <NavLink to="/services" onClick={() => setIsOpen(false)}>Servicios</NavLink>

                {!isAuthenticated && (
                    <NavLink to="/register" onClick={() => setIsOpen(false)}>Registro</NavLink>
                )}

                {!isAuthenticated && (
                    <NavLink to="/login" className="btn_inicio" onClick={() => setIsOpen(false)}>Login</NavLink>
                )}

                {isAuthenticated && (
                    <button className="btn_logout" onClick={() => { handleLogout(); setIsOpen(false); }}>Salir</button>
                )}
            </div>
        </nav>
    );
};

export default Hamburguesa;
