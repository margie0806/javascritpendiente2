var opc="si";

 while (opc=="si"){
    var numero=parseInt(prompt("escriba 1 para sumar los valores o 2 para salir")); 
    if(numero==1){
        var cantidad=parseInt(prompt("ingresa el valor de los sumandos"));
       suma=0; //iniciando el acumulador en 0
        for(i=1;i<=cantidad;i++){
          var valor=parseFloat(prompt("ingresa el valor "+i));
           suma+=valor;
        } 
        opc="no"   
       document.write("la suma es de los valores es : "+suma);  
    }
   else{
       opc="no"
    }
}