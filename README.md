# NSGA Frontend

Frontend del sistema NSGA, desarrollado en React con Vite y TailwindCSS.

## Características

- Interfaz moderna y responsiva
- Navegación con React Router
- Manejo de estado global con Context API
- Componentes reutilizables y organizados por dominio
- Integración con el backend vía API REST

## Requisitos

- Node.js >= 16

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/NSGA---Frontend.git
   cd NSGA---Frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm run dev
   ```

4. Accede a la app en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

## Estructura

- `/src/components` — Componentes principales y por dominio (Alumnos, CicloLectivo, etc.)
- `/src/context` — Contextos globales (ej: usuario)
- `/src/services` — Servicios para llamadas a la API
- `/src/assets` — Imágenes y recursos multimedia
- `/src/constants` — Constantes globales

## Configuración

- TailwindCSS para estilos
- ESLint para linting
- Vite como bundler

## Licencia

MIT
