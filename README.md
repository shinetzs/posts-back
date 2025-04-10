# Proyecto Posts - Backend

Este proyecto es una página simple que permite crear, listar y eliminar posts.

## Tecnologías utilizadas ##

Express: Framework para Node.js para la creación de servidores web.

Sequelize: ORM para Node.js que facilita la interacción con bases de datos SQL.

PostgreSQL: Base de datos relacional.

Cors: Middleware para habilitar solicitudes entre diferentes dominios.

Dotenv: Paquete para gestionar variables de entorno en proyectos Node.js.

## Requisitos

Asegúrate de tener los siguientes programas instalados:

- **Node.js** (versión 14 o superior)
- **PostgreSQL** (si usas una base de datos PostgreSQL local)
---

### Pasos para Ejecutar el Proyecto

#### 1. Clonar el Repositorio

    Primero, clona el repositorio del backend en tu máquina:
    git clone https://github.com/tu-usuario/proyecto-react.git

    cd proyecto-react

#### 2. Definir variables de entorno

    Crear archivo .env en la raíz del proyecto
    Definir las variables.

    **Referencia**
        DB_HOST=localhost   // Nombre host
        DB_USERNAME=test    // usuario BD
        DB_PASSWORD=prueba  // password BD
        DB_NAME=postgres    // Nombre BD
        PORT=3000 // puerto a desplegar backend

#### 3. Instalar y Ejecutar proyecto.

    npm install
    npm run dev


### 4. Creación de BD ###

    Crear base de datos PostgreSQL
    Crear tabla de posts :

        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
