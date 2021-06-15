import cipher from './cipher.js';

const codebutton = document.getElementById("code"); // usaremos el método getElementById para seleccionar el botón con el id='code' y lo almacenaremos en una variable llamada codebutton:
  codebutton.addEventListener('click', () => { //Después usaremos el método addEventListener(1er parámetro, 2do parámetro) para darle funcionalidad al botón. Para esto completaremos los parámetros que necesita.El 1er parámetro es un string y representa el suceso (evento) que ocurre sobre el elemento seleccionado, en este caso será click.
      
    let texto = document.getElementById("texto").value; //seguimos usando el método para seleccionar el  id='texto' y lo almacenamos en la variables llamada texto
    let offset = document.getElementById("offset").value;
     
    if(parseInt(offset)>=1){ //comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada. 
      document.getElementById("resultado").innerHTML= cipher.encode(offset,texto); } //usando el método hetElementById seleccionamos el 'resultado' y con el 'innerHTML'  nos devolvería el html interior:

    else{
    
        alert("ERROR, Ingresar números positivos");}

  })

/*-----------------------------------------------------------------------------------------*/
const decodebutton = document.getElementById("decodificar");
  
  decodebutton.addEventListener('click', () => {
  
    let texto = document.getElementById("texto").value;
    let offset = document.getElementById("offset").value;
      
    if(parseInt(offset)>=1){ 
      document.getElementById("resultado").innerHTML= cipher.decode(offset,texto);} 
    else{
        alert("ERROR, Ingresar números positivos");}
  })

/*----------------------------------------------------------------------------------------*/
const limpiarbutton = document.getElementById("limpiar");
  limpiarbutton.addEventListener('click', () => {
      document.getElementById("resultado").innerHTML= "";   
      document.getElementById("texto").value = ""; 
      document.getElementById("offset").value = ""; 
    })


