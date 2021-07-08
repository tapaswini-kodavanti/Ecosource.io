 
 // Alerts for when person first goes on the page
 $('document').ready(function(){
   var list = ['Did you know that 22% of people do not know about recycling?',
'Did you know as people age, the thought of recycling decreases?',
'Did you throw trash out your window today?',
'Do you own a recycling bin?',
'Do you know of any biodegradable products?',
'How much trash did you pass by as you traveled home?'];
 var quotes = Math.floor(Math.random() * 6); 
 var goThroughList = list[quotes];
 alert(goThroughList);

var button = $('.sub-btn-jenny');
console.log('here');

button.on('click', showUserScore);

function showUserScore(event) {
	event.preventDefault();

	var checked = $('.correct:checked');
	console.log('here');
	console.log(checked);
}

 });



















