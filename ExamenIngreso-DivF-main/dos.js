function mostrar()
{
  let nombre;
  let laboral;
  let cantidad;
  let sexo;
  let nota;
  let edad;
  let mayorPromedio = 0;
  let nombrePromedio;
  let nombreViejo;
  let edadViejo = 0;
  let contadorBus = 0;
  let contadorTrab = 0;
  let contadorEst = 0;
  let contadorCantidad =0;
  let acumladorBus = 0;
  let acumladorEst = 0;
  let acumladorTrab = 0;
  let promedioBus;
  let promedioEst;
  let promedioTrab;
  let nombreMenos;
  let edadMenos;
  let cantidadMenos = 0;
  let flagPromedio = 0;
  let flagViejo = 0;
  let flagMenosCursa = 0;

  let seguir;
  
  do{
   nombre = prompt("Ingrese nombre");

  laboral = prompt("Ingrese su situacion laboral: buscando/ trabajando/ solo estudiante");
  while(!(laboral == "buscando" || laboral == "trabajando" || laboral == "solo estudiante")){
    laboral = prompt("ERROR. Ingrese su situacion laboral: buscando/ trabajando/ solo estudiante");
  }
  cantidad = parseInt(prompt("Ingrese la cantidad de materias: de 0 a 8"));
    while(cantidad < 0 || cantidad > 8){
      cantidad = parseInt(prompt("ERROR. Ingrese la cantidad de materias: de 0 a 8"));
    }
  sexo = prompt("Ingrese su sexo: m/f/no binario");
	while(!(sexo == "m" || sexo == "f" || sexo == "no binario")){
		sexo = prompt("ERROR. Ingrese su sexo: m/f");
  }
  nota = parseInt(prompt("Ingrese su nota: entre 0 y 10"));
      while(nota < 0 || nota > 10){
      nota = parseInt(prompt("ERROR. Ingrese su nota: entre 0 y 10"));
      }
   edad = parseInt(prompt("Ingrese su edad"));
	   while(isNaN(edad)){
		edad = parseInt(prompt("ERROR. Ingrese su edad"));
	  }

    if(flagPromedio == 0 || (nota > mayorPromedio && laboral == "solo estudiante")){
      mayorPromedio = nota;
      nombrePromedio = nombre;
      flagPromedio = 1;
    }
    if(flagViejo == 0|| (edad > edadViejo && laboral == "solo estudiante")){
      nombreViejo = nombre;
      edadViejo = edad;
      flagViejo = 1;
    }
    switch(laboral){
    case "buscando":
       contadorBus++;
       acumladorBus += nota;
       promedioBus = acumladorBus/contadorBus;
         break;
     case "solo estudiante":
         contadorEst++;
         acumladorEst += nota;
         promedioEst = acumladorEst/contadorEst;
          break;
     case "trabajando":
          contadorTrab++;
          acumladorTrab += nota;
          promedioTrab = acumladorTrab/contadorTrab;
            break;
    }
    contadorCantidad++;
    if(flagMenosCursa == 0||(laboral == "buscando" && cantidad < cantidadMenos)){
    edadMenos = edad;
    nombreMenos = nombre;
    cantidadMenos = cantidad;
    flagMenosCursa = 1
    }






   seguir = prompt("Quiere seguir ingresando persona. Escriba s");
  }while(seguir == "s") 

  
 
  console.log("a- el nombre del mejor promedio es " + nombrePromedio);
  console.log("b- el nombre del mas viejo es " + nombreViejo);
  console.log("c- Promedio de Buscando " + promedioBus + " de Estudiante " + promedioEst + " y de Trabajando " + promedioTrab);
  console.log("d- El que menos cursa tiene de edad" + edadMenos + " y su nombre es " + nombreViejo);



}
