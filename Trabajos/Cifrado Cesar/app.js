function encryptedCaesar(){
	do{  
		 // Una vez ingresada la frase, le dará dos opciones, cifrar o descifrar la frase
		var answer = prompt("Indique la opcion que quiere para su frase: 1)Cifrada - 2)Descifrada");
		 // El if debe ser distinto a "vacio"	
		if(answer !=""){
			// Si la respuesta es la opcion 1, le dará la frase cifrada
			if(answer =="1"){
				cipher();
				//En cambio si la respuesta es la opción 2, se la dará descifrada
				}else if(answer =="2"){
					descipher();
					}else {
				    //Si no ingresa una de las dos opciones dadas, le arrojará un "alert"  
					alert("No ingrese una frase vacía o con números");
			}
		}
	}while (answer =="" || (answer != "1" && answer != "2"));
}
// Esta función muestra que lo que se escirbe en "cipher" sean letras de la A a la Z, y si no es así, les arroja una alerta
function cipher(){
	
		    var answer1 = prompt("Ingresa una frase");
            var verificador1 = /[A-z\s]/;
            // Asegurar de que no sean distintos a verificador
            if (answer1 !== verificador1){
                 alert("Asegurese de que lo escrito sea letras y sin números");
            }
}

function cesarCipher(){
var resultado =[];
	for (var i = 0; i <verificador1.length; i++){
		resultCipher.push(([i] - 33 + 26) % 26);
		alert(resultCipher);
	}
}
// Esta función muestra que lo que se escirbe en "desCipher" sean letras de la A a la Z, y si no es así, les arroja una alerta		 
function desCipher(){
	
		var answer2 = prompt("Ingrese una frase");
		var verificador2 = /[A-z\s]/;

		if (answer2 !== verificador2){
                 alert("Asegurese de que lo escrito sea letras y sin números");
		}
}

function cesarDesCipher(){

var resultado =[];
	for (var i = 0; i <verificador2.length; i++){
		resultDesCipher.push(([i] - 33 + 26) % 26);
		alert(resultDesCipher);
	}
}
	

encryptedCaesar();
