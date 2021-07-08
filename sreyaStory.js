var button = $('.sub-btn-story');
var label = $('.questionLabelStory');
console.log('here');

button.on('click', showUserScore);

function showUserScore(event) {
	event.preventDefault();

	var checked = $('.correct:checked');
	label.text(`Score: ${checked.length}/5`);
	label.css('visibility', 'visible');
	$('.endDisplay').css('visibility', 'visible');

}