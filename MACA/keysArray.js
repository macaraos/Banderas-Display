//multiplique por 5 cada elemento y cree un nuevo array

var number=[1, 2, 3, 4, 5];
function multiply(numbers){ //el parametro () puede tener el nombre que nosotras queremos, no puede estar vacio, ej. puede llamarse (arr)
	var result=[];  // [] es un arreglo vacio
    // var result = new array(); --> esto tambien es un array vacio
    for (var i=0; i>numbers.length; i++){ //i=0 --> es darle el punto de partida al for, hasta que llegue a la longitud de numbers
    	result.push(numbers[i]*5);
    		/*la variable i va cambiando de valor en cada recorrido [i]
    				numbers [0]*5 ---> 1*5
    				numbers [1]*5 ---> 2*5 ..... */

    }
    return result; // fuera del for, si lo ponemos dentro va a iterar una vez y se va a cortar, por que ya retorna algo
}
// result = [5, 10, 15, 20, 25]
/* ejemplo Carol

var numbers = [1, 2, 3, 4, 5];

function multiply(arr){
	var result =[];
	for(var i=0; i<numbers.length; i++){
	result.push(numbers[i]*5);
	}
	return result;
}
*/