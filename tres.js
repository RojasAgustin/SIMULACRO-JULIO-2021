/* Rojas Agustin DIV D
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
var respuesta;
var nombreIngresado;
var edadIngresada;
var generoIngresado;
var vacunaIngresada;
var temperaturaIngresada;
var temperaturaMaxima;
var nombreTemperaturaMaxima;
var vacunaTemperaturaMaxima;
var banderaPuntoA;
var contadorPuntoB;
var contadorPuntoC;
var contadorPuntoD;
var sumaTotalPuntoE;
var promedioPuntoE;
var contadorPuntoE;

respuesta = true;
banderaPuntoA = true;
contadorPuntoB = 0;
contadorPuntoC = 0;
contadorPuntoD = 0;
contadorPuntoE = 0;
sumaTotalPuntoE = 0;

while(respuesta == true) 
{
   nombreIngresado = prompt("Nombre");
   edadIngresada = prompt("Edad");
   edadIngresada = parseInt(edadIngresada);
   while(isNaN(edadIngresada) || edadIngresada < 0 ) 
   {
      edadIngresada = prompt("Edad:");
      edadIngresada = parseInt(edadIngresada);
   }
   generoIngresado = prompt("Ingresar genero");
   generoIngresado = generoIngresado.toUpperCase();
   while(generoIngresado != "M" && generoIngresado != "F" && generoIngresado != "NB") 
   {
      generoIngresado = prompt("Ingresar gneero");
      generoIngresado = generoIngresado.toUpperCase();
   }
   vacunaIngresada = prompt("Ingresar vacuna");
   vacunaIngresada = vacunaIngresada.toUpperCase();
   while(vacunaIngresada != "SPUTNIKV" && vacunaIngresada != "ASTRAZENECA" && vacunaIngresada != "OTRA") 
   {
      vacunaIngresada = prompt("Ingresar vacuna");
      vacunaIngresada = vacunaIngresada.toUpperCase();
   }
   temperaturaIngresada = prompt("Ingresar temperatura");
   temperaturaIngresada = parseInt(temperaturaIngresada);
   while(isNaN(temperaturaIngresada) || temperaturaIngresada < 30 || temperaturaIngresada > 50) 
   {
      temperaturaIngresada = prompt("Ingresar temperatura");
      temperaturaIngresada = parseInt(temperaturaIngresada);
   }

   if(banderaPuntoA == true || temperaturaIngresada > temperaturaMaxima) 
   {
      temperaturaMaxima = temperaturaIngresada;
      nombreTemperaturaMaxima = nombreIngresado;
      vacunaTemperaturaMaxima = vacunaIngresada;
      banderaPuntoA = false;
   }

	if(vacunaIngresada == "SPUTNIKV") 
	{
		if(generoIngresado == "F") 
      	{
         	contadorPuntoB++;
      	}
      	if(temperaturaIngresada < 38 && generoIngresado == "M") 
      	{
         	contadorPuntoE++;
         	sumaTotalPuntoE += edadIngresada;
      	}
	}
	else 
	{
  		if(vacunaIngresada == "ASTRAZENECA") 
  		{
 			if(generoIngresado == "NB") 
         	{
            	contadorPuntoC++;
         	}
         	if(temperaturaIngresada > 38) 
         	{
				contadorPuntoD++;
         	}
		}
      	else 
      	{
         	if(vacunaIngresada == "OTRA") 
         	{
            	if(generoIngresado == "NB") 
            	{
               		contadorPuntoC++;
        		}
         	}
      	}
   }
   console.log(sumaTotalPuntoE + "/" + contadorPuntoE);
   respuesta = confirm("Continuar?");
}

	promedioPuntoE = sumaTotalPuntoE / contadorPuntoE;
	promedioPuntoE = promedioPuntoE.toFixed(2);

	alert("Nombre mayor temperatura: " + nombreTemperaturaMaxima + ". Vacuna: " + vacunaTemperaturaMaxima);
	alert("Femenino y SputnikV: " + contadorPuntoB);
	alert("No binario y ASTRAZENECA/OTRA: " + contadorPuntoC);
	alert("Astrazeneca y +38°C: " + contadorPuntoD);
	alert("Promedio edad Sputnik y -38°C: " + promedioPuntoE + " años.");
}
