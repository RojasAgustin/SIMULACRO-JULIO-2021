/* Rojas Agustin DIV D
Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
var contador;
var tipoIngresado;
var precioIngresado;
var cantidadUnidades;
var marcaIngresada;
var capacidadIngresada;
var ssdBarato;
var banderaSSD;
var ssdUnidades;
var ssdMarca;
var banderaHDD;
var hddCaro;
var hddCapacidad;
var hddUnidades;
var contadorUnidadesHDD;

contador = 0;
banderaSSD = true;
banderaHDD = true;
contadorUnidadesHDD = 0;

while(contador < 5) 
{
   tipoIngresado = prompt("Tipo:");
   tipoIngresado = tipoIngresado.toUpperCase();
   while(tipoIngresado != "HDD" && tipoIngresado != "SSD" && tipoIngresado != "SSDM2") 
   {
      tipoIngresado = prompt("Tipo:");
      tipoIngresado = tipoIngresado.toUpperCase(); 
   }
   precioIngresado = prompt("Precio");
   precioIngresado = parseInt(precioIngresado);
   while(isNaN(precioIngresado) || precioIngresado < 5000 || precioIngresado > 18000) 
   {
      precioIngresado = prompt("Precio");
      precioIngresado = parseInt(precioIngresado);
   }
   cantidadUnidades = prompt("Unidades:");
   cantidadUnidades = parseInt(cantidadUnidades);
   while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 50) 
   {
      cantidadUnidades = prompt("Unidades");
      cantidadUnidades = parseInt(cantidadUnidades);
   }
   marcaIngresada = prompt("Marca");

   
   while(marcaIngresada != "Seagate" && marcaIngresada != "Kingston" && marcaIngresada != "Western Digital") 
   {
      marcaIngresada = prompt("Marca");
     
   }
   capacidadIngresada = prompt("Capacidad");
   capacidadIngresada = capacidadIngresada.toUpperCase();
   while(capacidadIngresada != "250GB" && capacidadIngresada != "500GB" && capacidadIngresada != "1TB" && capacidadIngresada != "2TB") 
   {
      capacidadIngresada = prompt("Capacidad");
      capacidadIngresada = capacidadIngresada.toUpperCase();
   }//Fin validacion
  
   if(tipoIngresado == "SSD") 
   {
      if(banderaSSD == true || precioIngresado < ssdBarato) 
      {
         ssdBarato = precioIngresado;
         ssdMarca = marcaIngresada;
         ssdUnidades = cantidadUnidades;
         banderaSSD = false;
      }
   }
   else 
   {
      if(tipoIngresado == "HDD") 
      {
          if(contadorUnidadesHDD == 0 || precioIngresado > hddCaro) 
          {
            hddCaro = precioIngresado;
            hddUnidades = cantidadUnidades;
            hddCapacidad = capacidadIngresada;
           
          }
          contadorUnidadesHDD += cantidadUnidades;

      }
   }

   contador++;
}

alert("SSD mas barato: $" + ssdBarato + ". Marca: " + ssdMarca + ". Cantidad de unidades: " + ssdUnidades);
alert("HDD CARO: $" + hddCaro + ". Capacidad: " + hddCapacidad + ". Unidades: " + hddUnidades);
alert("Unidades HDD: " + contadorUnidadesHDD);

}
