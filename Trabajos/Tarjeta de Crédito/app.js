function isValidCard(solicitud){
	
	do{

		var solicitud = prompt("Ingrese su número de tarjeta de crédito");
		var nTarjeta = [];
		var array = Array.from("solicitud").reverse();
		
		if(respuesta !="");{
			alert("Gracias");
		} else {
			alert("Ingrese número de tarjeta válida");
		}while (true);

		
		for(var i=0; i<array.length; i++){
			nTarjeta.push(parseInt(array[i]));
		}
		return nTarjeta;
			
	}	
}
