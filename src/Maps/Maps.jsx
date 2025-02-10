import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ latitude, longitude, description, id }) => {
    useEffect(() => {
        // Inicializa el mapa
        const map = L.map(`map-${id}`).setView([latitude, longitude], 19); // Usa el id único

        // Añade los tiles de OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Añade un marcador
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup(description)
            .openPopup();

        // Limpia el mapa al desmontar el componente
        return () => {
            map.remove();
        };
    }, [latitude, longitude, description, id]); // Dependencias del useEffect

    return <div id={`map-${id}`}style={{ width: "100%", height: "300px" }}></div>;
};

export default Maps;