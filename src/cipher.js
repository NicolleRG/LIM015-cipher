//Metodo encode y decode 

const cipher = {
  encode: (offset, texto) => { //PROPIEDAD
    
    if (offset == null || offset == 0) {
      throw new TypeError()   
    }

    let a =0;
    let b =0;
    let total ="";
  
    for (let i = 0; i < texto.length; i++) 
    {
      b= texto.charCodeAt(i); //devuelve un número indicando la posición

      if(b>=32) 
        { 
          a=b; 
        }

      if(b >=48 && b <=  57) 
        {
          a = 48 + (b - 48 + parseInt(offset)) % 10;
          //[0,1,2,3,4,5,6,7,8,9]
          //[0,1,2,3,4,5,6,7,8,9]
          
          //[48,49,50,51,52,53,54,55,56,57] [0..9]
          
          //   52 - 48   => 4+1= 5 
          // a = minimo + ( posiciondelaletra )
          // a = minimo + ( (indiceactual - minimo) + desplazamiento ) % totalDeNum
         
        }

      if(b >=65 && b <=90) //Mayúsculas
        {
          a = 65 + (b - 65 + parseInt(offset)) % 26 ;
        }
  
      if(b >=97 && b <= 122) // Minúsculas
        {
          //[ a, b, c, d , e , f , g , h , i , j , k ]
          //[97,98,99,100,101,102,103,104,105,106, 107]
          //[ 0, 1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10] 
          // dezplzar e(101) 7 posiciones
          //  posicion = numeroADezplazar - minimoDeSecuencia 
          //  posicion = 101 - 97
          //  posicion = 4  

          // 101 moverlo 7 posiciones
          //posicionnumre + dezplazamiento 
          // 4 + 7 
          // 11  -> error, sobrepasa la ultima posicion que es 10  
          //-> 4 + 7  | modulo -> me aseguro de que que mi posicion inicial mas el desplazamoento este en el rango de lo que me peudo desplzar (0..10)
          // (4 + 7) % 11  -> el modulo va segun al cantidad de elementos 
          //  DezplazamientoFinal = 0 

          //97 + 0

          a = 97 + (b - 97 + parseInt(offset)) % 26 ;

        }
        
        total += String.fromCharCode(a); //devuelve una cadena creada
    }
    return total;
  },

  /*---------------------------------------------------------------------------------*/


  decode: (offset, texto) => {

    if (offset == null || offset == 0) {
      throw new TypeError()
    }

    let a =0;
    let b =0;
    let total ="";
     
    for (let i = 0; i < texto.length; i++) 
    {
      b= texto.charCodeAt(i);

      if(b>=32) 
        { 
          a=b; 
        }
        
      if(b >=48 && b <=  57) //Números 
        {
          a = 57 + (b - 57 - parseInt(offset)) % 10;
        }

      if(b >=65 && b <=90) //Mayúsculas
        {
          a = 90 + (b - 90 - parseInt(offset)) % 26 ;
        }

      if(b >=97 && b <= 122) // Minusculas
        {
          a = 122 + (b - 122 - parseInt(offset)) % 26 ;
        }
        
      total += String.fromCharCode(a);
    }

    return total;
  }
};

export default cipher;

