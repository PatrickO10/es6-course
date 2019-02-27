const key = 'abc123';
let points = 50;
let winner = false;
/*
Cannot redeclare let twice in the same scope
ex:
let points = 60;
gives an error
*/

const person = {
	name: 'Wes',
	age: 28
}
// Properties of a const variable can change.
// The entire object is not immutable.
// It just cannot be reassigned
person.age = 29;
// age attribute will be 29