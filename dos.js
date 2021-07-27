/* Rojas Agustin DIV D
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var bolsasIngresadas;
  var precioIngresado;
  var sumaTotalPrecio;
  var sumaTotalBolsas;
  var precioSinDescuento;
  var descuento;
  var precioFinal; 
  var totalBolsasYerba;
  var totalBolsasAzucar;
  var totalBolsasCafe;
  var totalPrecioYerba;
  var totalPrecioAzucar;
  var totalPrecioCafe;

  respuesta = true;
  sumaTotalPrecio = 0;
  sumaTotalBolsas = 0;
  totalBolsasCafe = 0;
  totalBolsasAzucar = 0;
  totalBolsasYerba = 0;
  totalPrecioCafe = 0;
  totalPrecioAzucar = 0;
  totalPrecioYerba = 0;

  while(respuesta == true) 
  {
    tipoIngresado = prompt("Ingresar tipo:");
    tipoIngresado = tipoIngresado.toUpperCase();
    while(tipoIngresado != "YERBA" && tipoIngresado != "AZUCAR" && tipoIngresado != "CAFE") 
    {
      tipoIngresado = prompt("Yerba, azucar o cafe");
      tipoIngresado = tipoIngresado.toUpperCase();
    }

    bolsasIngresadas = prompt("Ingresar bolsas:");
    bolsasIngresadas = parseInt(bolsasIngresadas);
    while(isNaN(bolsasIngresadas) || bolsasIngresadas < 1) 
    {
      bolsasIngresadas = prompt("Mayor que cero");
      bolsasIngresadas = parseInt(bolsasIngresadas);
    }

    precioIngresado = prompt("Ingresar precio:");
    precioIngresado = parseInt(precioIngresado);
    while(isNaN(precioIngresado) || precioIngresado < 1) 
    {
      precioIngresado = prompt("Mayor que cero");
      precioIngresado = parseInt(precioIngresado);
    } // Fin validacion

    if(tipoIngresado == "YERBA") 
    {
      totalBolsasYerba += bolsasIngresadas;
      totalPrecioYerba += precioIngresado * bolsasIngresadas;
    }
    else 
    {
      if(tipoIngresado == "AZUCAR") 
      {
        totalBolsasAzucar += bolsasIngresadas;
        totalPrecioAzucar += precioIngresado * bolsasIngresadas;
      }
      else 
      {
        totalBolsasCafe += bolsasIngresadas;
        totalPrecioCafe += precioIngresado * bolsasIngresadas;
      }
    }

    sumaTotalPrecio += precioIngresado * bolsasIngresadas;
    sumaTotalBolsas += bolsasIngresadas;

    respuesta = confirm("Continuar?");
  }

  precioSinDescuento = sumaTotalPrecio;
  
  if(sumaTotalBolsas > 10) 
  {
    descuento = precioSinDescuento * (15/100);
    precioFinal = precioSinDescuento - descuento;
  }
  else 
  {
    if(sumaTotalBolsas > 5) 
    {
      descuento = precioSinDescuento * (10/100);
      precioFinal = precioSinDescuento - descuento;
    }
    else 
    {
      descuento = 0;
      precioFinal = precioSinDescuento;
    }
  }

  //punto a
  alert("Importe a pagar sin descuentos: $" + precioSinDescuento);

  //punto b
  if(descuento != 0) 
  {
    alert("Importe a pagar con descuento: $" + precioFinal);
  }

  //punto c
  if(totalBolsasYerba > totalBolsasCafe && totalBolsasYerba > totalBolsasAzucar) 
  {
    alert("Tipo con mas bolsas: Yerba(" + totalBolsasYerba + ")");
  }
  else 
  {
    if(totalBolsasAzucar > totalBolsasCafe && totalBolsasAzucar > totalBolsasYerba) 
    {
      alert("Tipo con mas bolsas: Azucar(" + totalBolsasAzucar + ")");
    }
    else 
    {
      if(totalBolsasCafe > totalBolsasAzucar && totalBolsasCafe > totalBolsasYerba) 
      {
        alert("Tipo con mas bolsas: Cafe(" + totalBolsasCafe + ")");
      }
    }
  }

  //punto d 
  if(totalPrecioYerba < totalPrecioAzucar && totalPrecioYerba < totalPrecioCafe)
  {
    alert("Tipo mas barato: Yerba ($" + totalPrecioYerba + ")");
  }
  else 
  {
    if(totalPrecioAzucar < totalPrecioYerba && totalPrecioAzucar < totalPrecioCafe) 
    {
      alert("Tipo mas barato: Azucar ($" + totalPrecioAzucar + ")");
    }
    else 
    {
      if(totalPrecioCafe < totalPrecioYerba && totalPrecioCafe < totalPrecioAzucar) 
      {
        alert("Tipo mas barato: Cafe ($" + totalPrecioCafe + ")");
      }
    }
  }


}
