import cipher from './cipher.js';

const codebutton = document.getElementById("code"); // método getElementById para seleccionar el botón y lo almacenaremos 
  codebutton.addEventListener('click', () => { // método addEventListener para darle funcionalidad al botón. 

    const texto = document.getElementById("texto").value; 
    let offset = document.getElementById("offset").value;
     
    if(parseInt(offset)>=1){ 
      document.getElementById("resultado").innerHTML= cipher.encode(offset,texto); } 
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


