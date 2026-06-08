# Plan de división de repositorios

Este proyecto se puede partir en tres partes, según lo que solicitaste:

## 1) Practica1 — HTML y CSS
Debe contener todo el frontend estático del sitio, principalmente:
- `public/index.html`
- `public/contacto.html`
- `public/mi-cuenta.html`
- `public/proximamente.html`
- `public/servicios.html`
- `public/style.css`
- `public/script.js` (para la lógica básica de frontend, formularios y navegación)
- Imágenes estáticas necesarias para esas páginas, especialmente las carpetas:
  - `public/fotos/`
  - `public/iconos/` (solo los JPEG/PNG usados en el sitio no 3D si los necesitas)

> En este repositorio vas el diseño y las hojas de estilo del sitio.

## 2) Practica2 — Imágenes 3D y realidad virtual
Debe contener la página y los recursos de la parte de VR/3D que ya están en este proyecto:
- `public/productos.html`
- `public/style.css` (estilos necesarios para la página de productos y VR)
- `public/script.js` (si quieres incluir el comportamiento interactivo del producto 3D)
- Activos de 3D y VR:
  - `public/iconos/Perfume bottle.glb`
  - `public/iconos/pixellabs-antique-perfume-bottle-3d-2867.glb`
  - `public/iconos/pixellabs-glb-4060.glb`
  - `public/iconos/1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `2204_w018_n001_957b_p15_957.jpg`, `oro supremo.png`
  - `public/fotos/perfume boss.png`, `public/fotos/perfume sauvage.png`, `public/fotos/perfume versace.png`

> En este repositorio vas toda la parte de realidad virtual, escenas A-Frame y modelos/glb.

## 3) Practica3 — Conexión a la base de datos PostgreSQL
Debe contener el backend y la configuración del servidor:
- `server.js`
- `package.json`
- `package-lock.json` (opcional, pero recomendable)
- Dependencias:
  - `express`
  - `pg`
  - `bcrypt`
  - `cors`
  - `dotenv` (si usas variables de entorno)

> En este repositorio va la implementación de la base de datos PostgreSQL y las rutas de registro/login.

## Observaciones
- El archivo `server.js` ya tiene toda la lógica de conexión a PostgreSQL y la creación de la tabla `usuarios`.
- La página `public/productos.html` es la que contiene las experiencias 3D/VR con A-Frame.
- El resto de páginas HTML y `style.css` conforman la parte visual y de estilos, que corresponde a `Practica1`.

## Recomendación para subir a GitHub
1. Crea cada carpeta localmente o clona cada repositorio por separado.
2. Copia los archivos correspondientes a cada repositorio.
3. Haz commits y sube a los remotos: `git remote add origin <URL>` y `git push -u origin main`.

Si quieres, también puedo ayudarte a generar los archivos exactos para cada parte o a extraerlos en carpetas separadas dentro de este proyecto.