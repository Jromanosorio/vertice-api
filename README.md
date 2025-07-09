# API Prueba Tecnica Vertice

Proyecto backend desarrollado como parte de una prueba técnica. Esta API permite registrar usuarios, iniciar sesión, búsqueda de productos y crear órdenes de compra.

---

## Tecnologías

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- JWT para autenticación
- Railway (despliegue)

---

## Instalación local

1. Clona el repositorio:

```bash
git clone https://github.com/Jromanosorio/vertice-api.git
cd vertice-api
npm run install
Se enviará el archivo `.env` por correo. Colocar en la raíz del proyecto.
npm run dev
```

## Variables de entorno
```bash
El archivo .env contiene las variables necesarias para conectar la base de datos y manejar el entorno.

    ⚠️ Por motivos de seguridad, este archivo no se encuentra en el repositorio.
    📧 Será enviado al correo del evaluador o encargado de la prueba técnica.
```

## Endpoints

1. GET /
2. GET /ping
3. POST /auth/register
4. POST /auth/login
5. GET /products
6. GET /products/:id
7. GET /orders
8. POST /orders
