# MinimalStore - Frontend (Hito 2)

Este proyecto fue inicializado con [Vite](https://vitejs.dev/) y React, diseñado para ser el frontend de MinimalStore, un clon minimalista de FB Marketplace.

## Tecnologías Utilizadas

- **Framework:** React + Vite (para compilaciones ultrarrápidas).
- **Estilos:** Pico CSS (enfoque content-first y classless).
- **Enrutamiento:** React Router DOM (rutas públicas y privadas).
- **Gestión de Estado:** Context API (para datos de sesión y autenticación).
- **Iconos:** Lucide React.
- **Peticiones HTTP:** Axios (preparado para la integración con el backend).

## Estructura del Proyecto

La estructura del código sigue las mejores prácticas para mantenerlo escalable y limpio:

- `src/components/`: Componentes reutilizables de la interfaz (Navbar, PrivateRoute, etc.).
- `src/views/`: Las distintas vistas o páginas de la aplicación (Home, Login, Registro, Catálogo, Detalle, etc.).
- `src/context/`: Contextos globales como `SessionContext` para manejar la autenticación.
- `src/index.css`: Archivo principal de estilos que importa Pico CSS y define las variables de tema oscuro minimalista con acentos púrpuras.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verla en el navegador.

La página se recargará si haces ediciones y verás los errores de linting en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
Optimiza React y genera los archivos minificados para obtener el mejor rendimiento.

## Vistas Implementadas

1. **Home Page (`/`)**: Página de inicio sencilla con una sección Hero destacando las funcionalidades.
2. **Registro de Usuario (`/registro`)** y **Login (`/login`)**: Formularios limpios para la gestión de cuentas. Redirección programática implementada.
3. **Galería de Publicaciones (`/catalogo`)**: Feed minimalista principal para explorar artículos.
4. **Vista Detalle de Producto (`/publicacion/:id`)**: Página dedicada para descripciones de artículos y contacto del vendedor.
5. **Crear Publicación (`/publicar`)**: Ruta privada con formulario para publicar nuevos artículos.
6. **Perfil de Usuario (`/perfil`)**: Panel de control privado del usuario con sus datos y publicaciones activas.
