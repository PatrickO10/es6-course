var width = 100;
let height = 200;
const key = 'abc123';


var age = 100;
if (age > 12) {
	// this var is scoped globally
	//var dogYears = age * 7;
	// let scoped inside the brackets
	let dogYears = age * 7;
	console.log(`You are ${dogYears} dog years old`);
}

console.log(dogYears);