# creación de proyecto vue 3

## Instalación de Vue 3

El siguiente comando instalara i ejecutara el comando create-vue

```bash
 npm init vue@latest
```

Resumen de las preguntas que nos hara el comando

- Project name: nombre del proyecto
- Add Typescript : Se recomienda que si.
- Add JSX Support: Esto permite poner html directamente en el script, yo no lo uso pues al usar devextreme la interaccion con el html es minima, y no lo he necesitado nunca.
- Add Vue Router: Es el que te permite gestionar y utilizar las rutas url.
- Add Pinia: Es un sistema de gestion de estados, que es muy parecido a vuex, pero mas sencillo y mas rapido, es recomendable.
- Add Vitest for unit testing: Es un sistema de testeo, para los test unitarios (yo no he usado vitest, siempre he usado jest) .
- Add an End-to-End testing solution: Es un sistema de testeo, yo uso cypress y es una herramienta muy potente.
- Add Eslint for code quality: Eslint permet detectar errores de codigo, y estandaritzar el codi.
- Add Prettier for code formating: Prettier permet formatear el codigo, para que todo el codigo sea igual, y se pueda leer mejor.

Aixo et crea l'escaffoldig del projecte, i un programa d'exemple.

Es posible que s'hagi de definir el formatter per defecte de vscode en els diferents tipos de fitxers.

## Arrancar el programa d'exemple

```bash
  cd HelloWorldAusatel
  npm install
  npm run dev
```

## Pluguin Chrome

Si feu servir chrome per debuggar, es recomenable fer servir la extensio de chrome  
Vue.js devtools. Que la encontrareis en la chrome web store.
