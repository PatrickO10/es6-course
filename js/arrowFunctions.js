/*
Three main benefits of arrow functions:
1. More concise
2. Implicit returns
3. Doesn't rebind the value of this when used inside of another function
*/

const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
	return `${name} bos`;
});

const fullNames2 = names.map((name) => {
	return `${name} bos`;
});

console.log(fullNames2);

// One parameter doesn't need parentheses
// Explicit return *write return*
const fullNames3 = names.map(name => {
	return `${name} bos`;
});

// Implicit return
const fullNames4 = names.map(name => `${name} bos`);

const fullNames5 = names.map(() => `cool bos`);

// Arrow functions are anonymous functions

const sayMyName = (name) => { alert(`Hello ${name}!`)};

sayMyName('pat');

/* Example */
const race = '100m dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// Implicit return with an object literal
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}))

/* Example */
const ages = [23,62,45,234,2,62,234,62,34];

const old = ages.filter(age => age >= 60);
console.log(old);