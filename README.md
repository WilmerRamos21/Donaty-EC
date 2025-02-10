# Donat-Ec

Donat-Ec es una plataforma web desarrollada como proyecto final de la materia **Diseño de Interfaces**. Esta aplicación permite la gestión de donaciones de diversos tipos, conectando a personas que desean contribuir con quienes más lo necesitan. La plataforma ha sido creada utilizando **React con Vite** y cuenta con una **base de datos en Firebase**, donde también se encuentra desplegada.

## 📌 Características Principales

### 1. 🔑 **Sistema de Autenticación**
- Registro e inicio de sesión con Firebase Authentication.

### 2. 📂 **Gestión de Información**
- Registro, consulta y actualización de datos sobre donaciones, usuarios y categorías.
- Integración con Firestore para almacenamiento de datos en tiempo real.

### 3. 🔄 **Operaciones Principales**
- **Registro de donaciones:** Los usuarios pueden añadir información sobre los artículos a donar.
- **Gestión de categorías:** Se pueden clasificar las donaciones en juguetes, ropa, alimentos, etc.
- **Interfaz amigable:** Diseño moderno y accesible para mejorar la experiencia del usuario.

## 🛠️ Tecnologías Utilizadas

- **React (Vite):** Framework para la interfaz de usuario.
- **Firebase:** Base de datos en tiempo real, autenticación y hosting.
- **Visual Studio Code:**  Entorno de desarrollo utilizado.
- **CSS:** Estilización de la interfaz.

## 🚀 Instalación y Configuración
Si deseas ejecutar el proyecto en tu entorno local, sigue estos pasos:

### 1️⃣ Clonar el repositorio
```bash
  git clone https://github.com/tu-usuario/donat-ec.git
  cd donat-ec
```

### 2️⃣ Instalar dependencias
```bash
  npm install
```

### 3️⃣ Configurar Firebase
1. Crea un proyecto en [Firebase](https://firebase.google.com/).
2. Configura **Firestore Database** y **Authentication**.
3. Obtén la configuración de Firebase y agrégala en un archivo `.env` con las siguientes variables:
```env
VITE_API_KEY=tu-api-key
VITE_AUTH_DOMAIN=tu-auth-domain
VITE_PROJECT_ID=tu-project-id
VITE_STORAGE_BUCKET=tu-storage-bucket
VITE_MESSAGING_SENDER_ID=tu-messaging-sender-id
VITE_APP_ID=tu-app-id
```

### 4️⃣ Ejecutar la aplicación
```bash
  npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

## 🌍 Despliegue en Firebase Hosting
Para desplegar la aplicación en Firebase:
```bash
  npm run build
  firebase deploy
```

## 📌 Contribución
Este proyecto fue desarrollado por estudiantes como parte de su evaluación final. Se agradecen sugerencias y mejoras.

---
✨ *"Uniendo corazones, cambiando vidas."* ✨

