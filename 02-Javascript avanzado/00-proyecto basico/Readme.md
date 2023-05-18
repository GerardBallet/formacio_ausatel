# Introduccion

En este ejemplo usaremos vite para compilar una aplicacion en vanilla js moderno.

# Requisitos

Para poder debuguear el codigo necesitamos tener instalado nodejs y npm. Para ellos instalaremos la version LTS de nodejs desde su pagina oficial. https://nodejs.dev/en/

# Iniciamos el proyecto node

Para iniciar el proyecto nodejs ejecutamos el siguiente comando en la terminal:

```bash
npm init -y
```

# Instalamos vite

```bash
npm i -D vite
```

- Para poder correr los comandos de forma global

```bash
npm i -g vite
```

- notese que ahora parece la dependencia en el package.json

# Creamos el archivo index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

# Creamos el archivo main.js

```js
import "./style.css";
console.log("Hola mundo desde archibo js");
```

# comandos de vite

- Para el desarrollo

```bash

 vite

```

- Para compilar

```bash

 vite build

```

- Para ejecutar el codigo compilado

```bash

 vite preview

```

Para ahorrar tiempo ponemos los comandos en el package.json

```json

"scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },

```

Ahora podemos hacer lo mismo con los comandos:

```bash

 npm run dev

```

```bash

 npm run build

```

```bash

 npm run serve

```

# Puntos a destacar:

- Carpeta modules
- Carpeta dist
- hash en js
- Eslint
- Tags de html
- Importacion dinamica
- Babel
- Typescript
- Sass
- Webpack
- Jquery
- Versionado de paquetes
- extensiones
  - Eslinty
  - version lens
