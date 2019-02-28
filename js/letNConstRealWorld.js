{
	const name = 'pat';
	console.log(name);
}

for(let i = 0; i < 10; i++) {
	console.log(i);
	setTimeout(function() {
		console.log('The number is ' + i);
	}, 1000);
}