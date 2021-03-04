function mostrar() {
  let tipo;
  let precio;
  let cantidad;
  let categoria;
  let contadorALC = 0;
  let contadorIAC = 0;
  let contadorQUAT = 0;
  let contadorDesin = 0;
  let contadorDeter = 0;
  let contadorBac = 0;
  let acumuladorALC = 0;
  let acumuladorIAC = 0;
  let acumuladorQUAT = 0;
  let acumuladorDetBar = 0;
  let mayorCategoria;
  let TipoCaro = 0;
  let categoriaCaro;
  let fabricanteCaro;
  let flag = 0;

  for (let i = 0; i < 5; i++) {
    tipo = prompt("Ingrese un producto: ALCOHOL/ IAC // QUAT");
    while (!(tipo == "ALCOHOL" || tipo == "IAC " || tipo == "QUAT")) {
      tipo = prompt("Error. Ingrese un producto: ALCOHOL/ IAC / QUAT");
    }
    precio = parseInt(prompt("Ingrese precio: entre 100 y 300"));
    while (!(precio > 100 || precio < 300)) {
      precio = parseInt(prompt("Error. Ingrese precio: entre 100 y 300"));
    }
    cantidad = parseInt(prompt("Ingrese cantidad: entre 1 y 1000"));
    while (!(cantidad > 1 || cantidad < 1000)) {
      cantidad = parseInt(prompt("Error. Ingrese precio: entre 1 y 1000"));
    }
    categoria = prompt(
      "Ingrese categoria: desinfectante/ bactericida // detergente"
    );
    while (
      !(
        categoria == "desinfectante" ||
        categoria == "bactericida" ||
        categoria == "detergente"
      )
    ) {
      categoria = prompt(
        "Error. Ingrese categoria: desinfectante/ bactericida // detergente"
      );
    }
    fabricante = prompt("Ingrese fabricante");

    switch (tipo) {
      case "ALCOHOL":
        contadorALC++;
        acumuladorALC += cantidad;
        break;
      case "IAC":
        contadorIAC++;
        acumuladorIAC += cantidad;
        break;
      case "QUAT":
        contadorQUAT++;
        acumuladorQUAT += cantidad;
        break;
    }
    switch (categoria) {
      case "desinfectante":
        contadorDesin++;
        break;
      case "bactericida":
        contadorBac++;
        break;
      case "detergente":
        contadorDeter++;
        break;
    }
  }
  if (contadorDesin > contadorBac && contadorDesin > contadorDeter) {
    mayorCategoria = "desinfectante";
  } else if (contadorBac > contadorDesin && contadorBac > contadorDeter) {
    mayorCategoria = "bactericida";
  } else {
    mayorCategoria = "detergente";
  }

  if (categoria == "detergente" && precio <= 200) {
    acumuladorDetBar += cantidad;
  }
  if (flag == 0 || precio > TipoCaro) {
    TipoCaro = precio;
    fabricanteCaro = fabricante;
    categoriaCaro = categoria;
    flag = 1;
  }

  console.log(
    "a- el promedio de compra de ALCOHOL es " +
      acumuladorALC / contadorALC +
      " del IAC es " +
      acumuladorIAC / contadorIAC +
      " y del QUAT es " +
      acumuladorQUAT / contadorQUAT
  );
  console.log("b- la categoria con mas cantidad es " + mayorCategoria);
  console.log(
    "c- Se compraron" +
      acumuladorDetBar +
      " de detergente de igual o menos de $200"
  );
  console.log(
    "d- El fabricante del producto caro es " +
      fabricanteCaro +
      " y la categoria es " +
      categoriaCaro
  );
}
