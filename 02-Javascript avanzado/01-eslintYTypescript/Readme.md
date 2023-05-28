# Introduccion

En este ejemplo usaremos como base el proyecto de 00-proyecto basico y le agregaremos eslint y typescript.

# Requisitos

Tener la extension de eslint de vscode instalada y los requisitos del proyecto anterior.
Tambine recomendamos la extension error lens

# añadir eslint

instalalmso la libreria de eslint

```bash
npm install eslint --save-dev
```

luego configuramos eslint mediante el comando

```bash
npm init @eslint/config
```

añadimos en las configuracions de vscode

```json
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```
Con esto si modificamos el fichero de index.js veremos en tiempo real los error de formato i al grabar se resolveran todos los errores automaticamente.

# añadir typescript

Primero de todo instalamos la libreria de typescript

```bash
npm install typescript --save-dev
```

Luego creamos el fichero de configuracion de typescript

```bash
npx tsc --init
```

Ahora podemos canviar la extension de index.js a index.ts y veremos que vscode nos indica los errores de typescript.

