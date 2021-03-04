function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
    let precio = 600;
	let contadorOsdeMay = 0;
	let contadorPAMI = 0;
	let nombreJoven;
    let temperaturaJoven;
	let edadJoven = 0;
	let cantidadPersonas = 0;
	let totalViaje = 0;
	let flag = 0;
    let seguir;
	
	do{
	    cantidadPersonas++;
		nombre = prompt("Ingrese su nombre");

	obraSocial = prompt("Ingrese su obra social: PAMI/ OSDE/ OTRAS");
	   while(!(obraSocial == "PAMI"|| obraSocial == "OSDE" || obraSocial == "OTRAS")){
		obraSocial = prompt("ERROR. Ingrese su obra social: PAMI/ OSDE/ OTRAS"); 
	   }
	
	edad = parseInt(prompt("Ingrese su edad: Mas de 17 años"));
	   while(edad < 17){
		edad = parseInt(prompt("ERROR. Ingrese su edad: Mas de 17 años"));
	   }
	
	temperatura = parseFloat(prompt("Ingrese su temperatura corporal"));
	while(temperatura > 43 || temperatura < 33){
		temperatura = parseFloat(prompt("ERROR. Ingrese su temperatura corporal"));
	}
	sexo = prompt("Ingrese su sexo: m/f");
	while(!(sexo == "m" || sexo == "f")){
		sexo = prompt("ERROR. Ingrese su sexo: m/f");
	}

	if(obraSocial == "OSDE" && edad > 60){
      contadorOsdeMay++;
	}

	if(flag == 0 || (obraSocial == "PAMI" && sexo == "f" && edad < edadJoven)){
      nombreJoven = nombre;
	  temperaturaJoven = temperatura;
	  flag = 1;
	}
    if(obraSocial == "PAMI"){
       contadorPAMI++;
	}
	
	seguir = prompt("Quiere seguir ingresando persona. Escriba s")
}while(seguir == "s")

totalViaje  = precio * cantidadPersonas;

console.log("a- la cantidad de personas de mas de 60 y con osde son " + contadorOsdeMay);
console.log("b- La mujer mas joven y con PAMI se llama " + nombreJoven + " y su temperatura es de " + temperaturaJoven);
console.log("c- El total sin descuento sale $" + totalViaje);


if(cantidadPersonas % contadorPAMI == 0){
  descuento = totalViaje *25 /100
  totalViaje = totalViaje - descuento
  console.log("d- Al tener la mitad de PAMI se hace un 25% y el precio final es " + totalViaje)
}
}
