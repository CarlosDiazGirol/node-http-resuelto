# Servidor http en node.js con rutas

Este proyecto es un servidor web básico construido con Node.js que sirve páginas HTML estáticas. Utiliza un enfoque modular para el manejo de rutas y presenta una estructura organizada para facilitar la expansión y el mantenimiento del código.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Configuración del Proyecto
- Haz fork en el repositorio 
- Clónalo
- npm install para instalar todas las dependencias 
- npm start para iniciar el proyecto

## Estructura
|-- node_modules/
|-- public/
|   |-- index.html
|   |-- about.html
|   |-- contact.html
|   |-- 404.html
|-- src/
|   |-- server.mjs
|   |-- routes/
|       |-- routeHandlers.js
|       |-- routesMap.mjs
|-- package-lock.json
|-- package.json


- src/: Este directorio contiene tu código fuente.
  - server.mjs: Tu archivo principal donde se crea el servidor y maneja las solicitudes HTTP.
  - routes/: Un directorio para organizar tus archivos de rutas.
  - routesHandlers.js: Archivo que define rutas principales.

- public/: Este directorio contiene archivos estáticos como HTML, imágenes, css, etc.
  - index.html: Archivo HTML principal.
  - about.html: Archivo HTML sobre nosotros.
  - contact.html: Archivo HTML de contacto.
  - 404.html: Archivo HTML de error.

- node_modules/: Directorio que contiene las dependencias de tu proyecto. Este directorio se crea automáticamente cuando instalas las dependencias con npm install.

- package.json y package-lock.json: Archivos de configuración de Node.js y npm. package.json contiene información sobre tu proyecto y las dependencias, y package-lock.json asegura la consistencia de las versiones de las dependencias.

# Módulos nativos
- `node:http`: Este módulo proporciona funcionalidades para crear servidores HTTP y manejar solicitudes y respuestas.
- `fileURLToPath` del módulo `node:url`: `fileURLToPath` se utiliza para convertir una URL en formato de objeto file:// a una cadena de ruta de archivo compatible con el sistema de archivos local.
- `readFile` del módulo `fs/promises`: `fs/promises` es una versión promisificada del módulo `fs`, que permite operaciones de sistema de archivos de manera asíncrona utilizando promesas.
- `path`: Este módulo proporciona utilidades para trabajar con rutas de archivos y directorios. En particular, se utiliza para construir rutas de archivos en el sistema de archivos local.

# Variables y métodos: 
- Esta línea de código `__filename = fileURLToPath(import.meta.url)` se utiliza para obtener la ruta del archivo actual en un entorno que utiliza módulos ESM (ECMAScript Modules), como Node.js con soporte para ECMAScript Modules.
- `hasOwnProperty` es un método en JavaScript que se utiliza para determinar si un objeto tiene una propiedad con un nombre específico. Este método es parte del prototipo del objeto Object y se utiliza comúnmente para verificar si un objeto propio (no heredado) contiene una propiedad dada.
- Esta línea de código `{ status, headers, body } = await routeHandlers(req, __dirname, route, fileName)` utiliza la desestructuración de objetos para extraer las propiedades `status`, `headers` y `body` de un objeto devuelto por la función `routeHandlers`.
- `readFile(path.join(...))` se usa para unir las partes de una ruta de archivo y leerlo con `readFile`.