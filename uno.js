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
	var ssdMasBarato;
	var ssdUnidades;
	var ssdMarca;
	var banderaSSD;
	var banderaHDD;
	var hddCaro;
	var hddCapacidad;
	var hddUnidades;
	var totalUnidadesHDD;


	contador = 0;
	banderaSSD = true;
	banderaHDD = true;
	totalUnidadesHDD = 0;
	
	while(contador < 5) 
	{
		tipoIngresado = prompt("Ingresar tipo: ");
		tipoIngresado = tipoIngresado.toUpperCase();
		while(tipoIngresado != "HDD" && tipoIngresado != "SSD" && tipoIngresado != "SSDM2")
		{
			tipoIngresado = prompt("HDD, SSD o SSDM2");
			tipoIngresado = tipoIngresado.toUpperCase();
		}
		
		precioIngresado = prompt("Ingresar precio:");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) || precioIngresado < 5000 || precioIngresado > 18001) 
		{
			precioIngresado = prompt("Entre 5000 y 18000");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadUnidades = prompt("Ingresar cantidad de unidades:");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 51) 
		{
			cantidadUnidades = prompt("Entre 1 y 50");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marcaIngresada = prompt("Ingresar marca:");
		while(marcaIngresada != "Seagate" && marcaIngresada != "Western Digital" && marcaIngresada != "Kingston") 
		{
			marcaIngresada = prompt("Seagate, Western Digital o Kingston");
		}

		capacidadIngresada = prompt("Ingresar capacidad");
		while(capacidadIngresada != "250GB" && capacidadIngresada != "500GB" && capacidadIngresada != "1TB" && capacidadIngresada != "2TB") 
		{
			capacidadIngresada = prompt("250GB, 500GB, 1TB o 2TB");
		} //Fin Validacion

		if(tipoIngresado == "SSD") 
		{
			if(banderaSSD == true || precioIngresado < ssdMasBarato) 
			{
				ssdMasBarato = precioIngresado;
				ssdUnidades = cantidadUnidades;
				ssdMarca = marcaIngresada;
				banderaSSD = false;
			}
		}
		else 
		{
			if(tipoIngresado == "HDD") 
			{
				if(banderaHDD == true || precioIngresado > hddCaro) 
				{
					hddCaro = precioIngresado;
					hddUnidades = cantidadUnidades;
					hddCapacidad = capacidadIngresada;
					banderaHDD = false;
				}
				totalUnidadesHDD += cantidadUnidades;
			}
		}

		contador++;	
	}

	alert("SSD Mas barato: $" + ssdMasBarato +". Unidades: " + ssdUnidades + ". Marca: " + ssdMarca);
	alert("HDD Mas caro: $" + hddCaro + ". Unidades: " + hddUnidades + ". Capacidad: " + hddCapacidad);
	alert("Cantidad de unidades HDD: " + totalUnidadesHDD);
}
