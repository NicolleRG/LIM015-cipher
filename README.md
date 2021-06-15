# ¡Secure Keys Social Media! 🔐
>*Tus redes sociales más seguras que nunca*

**Creadora 💁‍♀️:**

1. Cristina Nicolle Rebaza Garcia

**Link:**

[CipherCesar](http://127.0.0.1:5500/src/index.html)

## Comenzamos ⭐

* [1. Introducción](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Hacker edition](#6-hacker-edition)
* [6. Consideraciones técnicas](#7-consideraciones-técnicas)
* [7. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [8. Checklist](#9-checklist)

***

## 1. Introducción
###### En la actualidad podemos observar que muchas veces nuestras redes sociales, nuestras cuentas, nuestros mensajes y más, se encuentran muy expuestos ante amenazas de hackers no éticos, los cuales nos hacen sentir intranquilos y abrumados. Por ello es que he decidido crear esta aplicación que nos ayudará a mandar mensajes cifrados, generar contraseñas, y así poder darle la utilidad a nuestros proyectos, conversaciones y demás sin miedo alguno.######

## 2. Resumen del proyecto

Se creo está aplicación con la función de poder crear mensajes cifrados o descifrados de acuerdo a la intención del usuario.
Este va dirigido a todas las personas en general, especialmente para quienes tienen redes sociales y quieran sentirse más seguros. 

## 3. Objetivos de aprendizaje

-Se construyó una aplicación web que interactuará con los usuarios finales a través del navegador, utilizando HTML, CSS y JavaScript como tecnologías. 
### HTML y CSS

* [✅] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [✅] Uso de selectores de CSS.

### DOM

* [✅] Uso de selectores del DOM.
* [✅] Manejo de eventos del DOM.
* [✅] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [✅] Manipulación de strings.
* [✅] Uso de condicionales (if-else | switch | operador ternario)
* [✅] Uso de bucles (for | for..in | for..of | while)
* [✅] Uso de funciones (parámetros | argumentos | valor de retorno)
* [✅] Declaración correcta de variables (const & let)

### Testing

* [✅] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [✅] Organizar y dividir el código en módulos (Modularización)
* [✅] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [✅] Uso de linter (ESLINT)

### Git y GitHub

* [✅] Uso de comandos de git (add | commit | pull | status | push)
* [✅] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [✅] Diseñar la aplicación pensando y entendiendo al usuario.
* [✅] Crear prototipos para obtener feedback e iterar.
* [✅] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)


## 4. Criterios de aceptación mínimos del proyecto

Esta página cifra y descifra este alfabeto en mayúsculas, minúsculas y números:

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* a b c d e f g h i j k l m n o p q r s t u v w x y z
* 0 1 2 3 4 5 6 7 8 9 

### Definición del producto

Al realizar mi prototipo, me iba imaginando y poniendome en el lugar del usuario,  como es que queria yo poder acceder a una página, que sea entendible, con estética  y fácil de usar. Ahora ellos podrán tener sus mensajes y contraseñas más seguras. 

Esta es la plantilla plasmé como es que queria que se viera mi aplicación. 

>![Prototipo de Cipher](https://github.com/NicolleRG/LIM015-cipher/blob/main/src/assets/cipher.png)

* Usuarios de producto: Todos en general que busquen seguridad en sus redes sociales. 
* Objetivos de estos usuarios: Usar la aplicación para fines de seguridad, tanto en el cifrado o descifrado. 
* Resolviendo sus problemas: Ahora todo será más secreto, confiable y sencillo de usar.

### Interfaz de usuario (UI)

>![Entrada](https://github.com/NicolleRG/LIM015-cipher/blob/main/src/assets/1.jpg)

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.

>![Cifrado](https://github.com/NicolleRG/LIM015-cipher/blob/main/src/assets/2.jpg)

* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

>![Descifrado](https://github.com/NicolleRG/LIM015-cipher/blob/main/src/assets/3.jpg)

* Me manda una alerta cada vez que ingreso números menores a 1.

>![Entrada](https://github.com/NicolleRG/LIM015-cipher/blob/main/src/assets/4.jpg)

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron. Aquí puedes agregar un parte para definir tu plan de acción, 
  Objetivos de Aprendizaje que vas a prioritizar este proyecto.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 5. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 7. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/main/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/main/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Debes realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. 
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/) tu fork a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Achicando el gran problema en problemas más pequeños

Un "superpoder" que esperamos puedas desarrollar durante el bootcamp es el de definir "mini-proyectos" que te acerquen paso a paso a la solución del "gran proyecto". Es el equvalente a comenzar armando esquinas o bordes del rompecabezas/puzzle sin saber necesariamente cómo encajarán al final. Déjate llevar y explora. Estas son algunas sugerencias:

**"Mover" un valor de una caja de texto a otra**  
Crea una interfaz simple con 2 cajas de texto y un botón. Si escribo algo en la caja de texto 1 y le doy click al botón, quiero que lo que escribí se "mueva" desde la caja 1 hacia la caja 2.

Para lograr esto tendrás que aprender a: detectar un evento en el navegador (click), identificar un elemento de tu interfaz para obtener su contenido/valor (la caja de texto 1), "escribir" un valor en otro elemento de la interfaz (caja de texto 2).

**"Convertir" una letra en su código ASCII**  
Pensando en la misma interfaz anterior (2 cajas de texto y 1 botón). Quiero escribir A o B (una sola) en la caja de texto 1 y que cuando le dé click al botón, aparezca el código ASCII de la letra en la caja de texto 2.

Ahora no solamente estás "leyendo" y "escribiendo" valores en el navegador, también tendrás que "manipularlos" antes de "escribirlos".

**"Cifrar" A o B con un desplazamiento (offset) de 3**  
Cuando escriba A o B en la caja de texto 1 y le dé click al botón, quiero que apaezca la letra cifrada en la caja de texto 2. Por ejemplo, si escribo B debe aparecer E.

**"Cifrar" una letra con un desplazamiento de 30 caracteres**  
En los casos anteriores probamos con letras y con un desplazamiento que no implicaban llegar "más allá" de final del alfabeto. Ahora prueba con un caso que sí lo requiera. Por ejmplo 30 caracteres de desplazamiento. Para esto te puede ayudar el video de la sección "Recursos y temas relacionados". La fórmula no es lo importante en este proyecto, lo importante es lo que haces con la fórmula.

**"Cifrar" tres letras con un desplazamiento cuqlquiera**  
Hasta ahora hemos explorado trabajar con una sola letra pero ¿cómo haríamos si son más? Para hacerlo tendrás que aprender cómo ir cifrando letra por letra y ya estás mucho más cerca de resolver el proyecto "grande"

Fíjate que la complejidad es creciente, la clave está en definir el primer paso lo más simple y pequeño que puedas. Luego tú misma puedes ir agregando complejidad a medida que avanzas.

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Guía para Cifrado César](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)

## 8. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [✅] `README.md` incluye info sobre proceso y decisiones de diseño.
* [✅] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [✅] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [✅] `README.md` (o otro archivo) contiene tu plan de acción - Objetivos que prioritizaste este proyecto.
* [✅] Usa VanillaJS.
* [✅] No utiliza `this`.
* [✅] Implementa `cipher.encode`.
* [✅] Implementa `cipher.decode`.
* [✅] Pasa linter con configuración provista.
* [✅] Pasa pruebas unitarias.
* [✅] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [✅] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [✅] Interfaz permite escribir un texto para ser cifrado.
* [✅] Interfaz muestra el resultado del cifrado correctamente.
* [✅] Interfaz permite escribir un texto para ser descifrado.
* [✅] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [✅] Cifra/descifra minúsculas
* [✅] Cifra/descifra _otros_ caracteres (espacios)

