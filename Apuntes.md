
# NodeJs Entorno Ejecucion JavaScrip
- console sale de globalThis

- globalThis.console.log("global")

console.log('Hola, mundo 👋')

- *Variable gloval*
- globalThis -> Variable global en toda nuestra aplicacion (se puede acceder a ella)
- window -> globalThis en el navegador
- node js -> global


- *Patron de diseño Modulo*

- Separar el codigo en diferentes ficheros y se puden esportar e importar 

- *commonJS* -> sistema clasico de modulos

module.exports = {
    sum (nombre funcion)
}

- .js -> por defecto utiliza CommonJS
- .mjs -> para utilizar ES Module
- .cjs -> para utilizar CommonJs