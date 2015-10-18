$(document).ready(function() {
	$('.main').mouseenter(function() {
		playScooby();
		$('.scooby-casual').hide();
		$('.scooby-car').show();
		$('.scooby-ghost').show();
	})
	.mouseleave(function() {
		pauseScooby();
		$('.scooby-ghost').hide();
		$('.scooby-car').hide();
		$('.scooby-casual').show();
	});
});

	function playScooby () {
		$('#scooby-song')[0].volume = 0.5;
		$('#scooby-song')[0].load();
		$('#scooby-song')[0].play();
	}
	function puaseScooby () {
		audio.pause();
	}