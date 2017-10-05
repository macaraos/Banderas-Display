/*var number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var star=1;
var end=10;
var result=[];

function range (arr){
	for(i=1; i<number.length; i++){
		result.push(numbers[i]++);
	}
	console.log(result.push)
}
*/

/*//como comenzar un arreglo
var arreglo = [2,25,42,[8,23]];
 //[] arreglo vacio, pero se le puede guardar numeros o meter otro arreglo 
 */

 //solucion de Tory (compañera) corregido
 
 function range(star, end){
	var newArray=[];

	for(var i=start; i<=end; i++){
		newArray.push(i);
	}
	return newArray;
 }

 //segunda parte

 function sum(array){
 	var result=0;

 	for(var i=0; i<array.length; i++){ // el ultimo elemento va a ser el largo del elemento
 		result += array[i];
 	}

 	return result;
 }


