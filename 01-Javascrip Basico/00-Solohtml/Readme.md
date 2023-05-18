# Requisitos

- instalar la extension de vscode `live server`

# Descripcion

Ahora veremos un paso a paso para generar este proyecto.

# 0 HTML

- Creamos un fichero `index.html`
- Escribimos en el fichero html5 y pulsamos `tab` para que se genere el esqueleto de la pagina
- Pulsamos boton derecho sober el fichero y seleccionamos `open with live server`
- Nos situamos en el body y escribimos div.container#main y pulsamos `tab` para que se genere el div con la clase container con el id main
- Dentro del div escribimos h1#title y pulsamos `tab` para que se genere el h1 con el id title
- Dentro del h1 escribimos `Hola Mundo`
- Dentro del div escribimos p#description y pulsamos `tab` para que se genere el p con el id description
- Dentro de p escribimos lorem y pulsamos `tab` para que se genere el texto de relleno

# 1 CSS

Añadimos estilos dentro del css

Para ello Añadimos el tag style dentro del head del html

```html
<style>
  #main {
    background-color: #f1f1f1;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
  }

  #title {
    color: #000;
    font-size: 30px;
    text-align: center;
  }

  #descripcion {
    color: #000;
    font-size: 20px;
    text-align: center;
  }
</style>
```

# 2 Javascript

Ahora añadiremos un script de javascript para que nos muestre un mensaje en la consola del navegador

Para ello añadimos el tag script dentro del body del html

```html
<script>
  console.log("Hola Mundo");
</script>
```

Pulsando F12 en el navegador podemos ver la consola del navegador y el mensaje que hemos escrito en el script

# Ahora probaremos de hacer unapeticion a una api

Para ello usaremos la api publica de marvel.https://developer.marvel.com/documentation/getting_started

Para ello nos registramos en la web de marvel y nos generamos una apikey publica y una privada

generamos el md5 de ts + private key + public key

en https://www.md5hashgenerator.com/

Primero podemos probar de realizar la llamada con la api de rapidapi a la url

https://gateway.marvel.com:443/v1/public/characters?ts={ts}&apikey={apikey}&hash={hash}

Ejemplo de llamada con fetch

```javascript
let ts = 1;
let apikey = 1;
let hash = 1;
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
```
