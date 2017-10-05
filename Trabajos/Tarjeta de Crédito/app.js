function isValidCard(solicitud){
	
	do{

		var solicitud = prompt("Ingrese su número de tarjeta de crédito");
		var nTarjeta = [];
		var array = Array.from("solicitud").reverse();
		
		if(respuesta !=""){
			alert("Ingrase lo solicitado");
		} else {
			alert("Ingrese número de tarjeta válida");
		}while (respuesta =="");

		}
		
		for(var i=0; i<array.length; i++){
			nTarjeta.push(parseInt(array[i]));
		}
		return nTarjeta;
			
	}	
}
