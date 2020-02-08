console.log('hsdasdaello');
var input = document.getElementById('name');
var greet = document.getElementById('greet');
input.addEventListener('keyup', function () {
	console.log('hello');
	greet.innerText = 'Hello to ' + input.value;
});
