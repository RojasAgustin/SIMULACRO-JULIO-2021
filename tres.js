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
	var banderaPuntoA;
	var temperaturaMaxima;
	var nombreTemperaturaMaxima;
	var vacunaTemperaturaMaxima;
	var mensajeA;
	var contadorPuntoB;
	var contadorPuntoC;
	var contadorPuntoD;
	var sumaTotalPuntoE;
	var promedioPuntoE;
	var contadorPuntoE;

	respuesta = true;
	contadorPuntoB = 0;
	contadorPuntoC = 0;
	contadorPuntoD = 0;
	contadorPuntoE = 0;
	sumaTotalPuntoE = 0;
	banderaPuntoA = true;
	
	while(respuesta == true) 
	{
		nombreIngresado = prompt("Ingresar nombre:");

		edadIngresada = prompt("Ingresar edad:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada)) 
		{
			edadIngresada = prompt("Ingresar edad:");
			edadIngresada = parseInt(edadIngresada);			
		}

		generoIngresado = prompt("Ingresar genero:");
		generoIngresado = generoIngresado.toUpperCase();
		while(generoIngresado != "F" && generoIngresado != "M" && generoIngresado != "NB") 
		{
			generoIngresado = prompt("F, M o NB");
			generoIngresado = generoIngresado.toUpperCase();
		}

		vacunaIngresada = prompt("Ingresar vacuna aplicada:");
		vacunaIngresada = vacunaIngresada.toUpperCase();
		while(vacunaIngresada != "SPUTNIKV" && vacunaIngresada != "ASTRAZENECA" && vacunaIngresada != "OTRA") 
		{
			vacunaIngresada = prompt("SputnikV, Astrazeneca u otra");
			vacunaIngresada = vacunaIngresada.toUpperCase();
		}

		temperaturaIngresada = prompt("Ingresar temperatura");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		//Fin validacion

		if(banderaPuntoA == true || temperaturaIngresada > temperaturaMaxima) 
		{
			temperaturaMaxima = temperaturaIngresada;
			nombreTemperaturaMaxima = nombreIngresado;
			vacunaTemperaturaMaxima = vacunaIngresada;
			banderaPuntoA = false; 
		}

		if(generoIngresado == "F" && vacunaIngresada == "SPUTNIKV") 
		{
			contadorPuntoB++;
		}

		if(generoIngresado == "NB" && (vacunaIngresada == "ASTRAZENECA" || vacunaIngresada == "OTRA")) 
		{
			contadorPuntoC++;
		}
		
		if(vacunaIngresada == "ASTRAZENECA" && temperaturaIngresada > 38) 
		{
			contadorPuntoD++;
		}

		if(generoIngresado == "M" && vacunaIngresada == "SPUTNIKV" && temperaturaIngresada < 38) 
		{
			sumaTotalPuntoE += edadIngresada;
			contadorPuntoE++;
		}
		console.log(edadIngresada + "/" + generoIngresado + "/" + nombreIngresado + "/" + vacunaIngresada + "/" + temperaturaIngresada);
		respuesta = confirm("Continuar?");

	}
	promedioPuntoE = sumaTotalPuntoE / contadorPuntoE;

	mensajeA = "Mayor temperatura registrada: " + temperaturaMaxima;
	mensajeA += "°C. Nombre: " + nombreTemperaturaMaxima;
	mensajeA += ". Vacuna aplicada: " + vacunaTemperaturaMaxima;
	
	document.write(mensajeA + "<br>");
	document.write("Mujeres con SputnikV: " + contadorPuntoB + "<br>");
	document.write("No binarios con Astrazeneca u otra: " + contadorPuntoC + "<br>");
	document.write("Astrazeneca y mayor a 38°C: " + contadorPuntoD + "<br>");
	document.write("Promedio de edad de hombres/sputnikV/sin fiebre: " + promedioPuntoE + " años");
}
