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
  var sumaTotalBolsas;
  var descuento;
  var sumaTotalPrecio;
  var precioSinDescuento;
  var precioFinal;
  var totalBolsasCafe;
  var totalBolsasYerba;
  var totalBolsasAzucar;
  var banderaPuntoD;
  var compraMasBarata;
  var tipoMasBarato;
  respuesta = true;
  sumaTotalBolsas = 0;
  sumaTotalPrecio = 0;
  totalBolsasAzucar = 0;
  totalBolsasCafe = 0;
  totalBolsasYerba = 0;
  banderaPuntoD = true;

  while(respuesta == true) 
  {
   
   tipoIngresado = prompt("Ingresar tipo:");
   tipoIngresado = tipoIngresado.toUpperCase();
   while(tipoIngresado != "YERBA" && tipoIngresado != "AZUCAR" && tipoIngresado != "CAFE") 
   {
      tipoIngresado = prompt("Ingresar tipo:");
      tipoIngresado = tipoIngresado.toUpperCase();
   }
   
   bolsasIngresadas = prompt("Ingresar bolsas:");
   bolsasIngresadas = parseInt(bolsasIngresadas);
   while(isNaN(bolsasIngresadas) || bolsasIngresadas < 1) 
   {
      bolsasIngresadas = prompt("Ingresar bolsas:");
      bolsasIngresadas = parseInt(bolsasIngresadas);
   }
   
   precioIngresado = prompt("Ingresar precio:");
   precioIngresado = parseInt(precioIngresado); 
   while(isNaN(precioIngresado) || precioIngresado < 1) 
   {
      precioIngresado = prompt("Ingresar precio:");
      precioIngresado = parseInt(precioIngresado); 
   }

   sumaTotalBolsas += bolsasIngresadas;
   sumaTotalPrecio += bolsasIngresadas * precioIngresado;
   
   if(tipoIngresado == "YERBA") 
   {
      totalBolsasYerba += bolsasIngresadas;
   }
   else 
   {
      if(tipoIngresado == "CAFE") 
      {
         totalBolsasCafe += bolsasIngresadas;
      }
      else 
      {
         totalBolsasAzucar += bolsasIngresadas;
      }
   }

   if(banderaPuntoD == true || precioIngresado * bolsasIngresadas < compraMasBarata) 
   {
      compraMasBarata = precioIngresado * bolsasIngresadas;
      tipoMasBarato = tipoIngresado;
      banderaPuntoD = false;
   }
   console.log(compraMasBarata + "/" + tipoMasBarato);

   respuesta = confirm("Continuar?");
}

precioSinDescuento = sumaTotalPrecio;

if(sumaTotalBolsas > 10) 
{
   descuento = precioSinDescuento * 15/100;
   precioFinal = precioSinDescuento - descuento;
}
else 
{
   if(sumaTotalBolsas > 5 && sumaTotalBolsas < 11) 
   {
      descuento = precioSinDescuento * 10/100;
      precioFinal = precioSinDescuento - descuento;
   }
   else 
   {
      descuento = 0;
      precioFinal = precioSinDescuento;
   }
}

alert("Precio sin descuento: $" + precioSinDescuento);
if(descuento != 0) 
{
   alert("Precio con descuento: $" + precioFinal);
}

if(totalBolsasCafe > totalBolsasYerba && totalBolsasCafe > totalBolsasAzucar) 
{
   alert("Mas bolsas: Cafe (" + totalBolsasCafe + ")");
}
else 
{
   if(totalBolsasYerba > totalBolsasCafe && totalBolsasYerba > totalBolsasAzucar) 
   {
      alert("Mas bolsas: Yerba (" + totalBolsasYerba + ")");
   }
   else 
   {
      if(totalBolsasAzucar > totalBolsasCafe && totalBolsasAzucar > totalBolsasYerba) 
      {
         alert("Mas bolsas: Azucar (" + totalBolsasAzucar +")");
      }
   }
}

alert("Tipo compra mas barata: " + tipoMasBarato + "($" + compraMasBarata + ")");
}
