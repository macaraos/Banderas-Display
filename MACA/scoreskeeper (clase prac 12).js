var scores={
	ana:0,
	ale:0,
	maria:0
};

function addPoints(name,points){
	score[name] += points;
}

console.log(addPoints("maria", 350));

function printAllPoints(){

	var names = Object.keys(scores);
	var points = 0;

	for (var i =0; <names.length; i++){
		points += scores[names[i]];
	}
	return points;
}

console.log(printAllPoints());