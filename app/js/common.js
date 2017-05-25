$(document).ready(function() {

	$('.mobile-menu-button').click(function() {
		$(this).fadeOut('50', function() {
			$('.mobile-menu-close').fadeIn('200');
		});
		$('.mobile-nav').animate({
			right: '0px'
		}, 200);
		$('body').animate({
			right: '230px'
		}, 200);
	});

	$('.mobile-menu-close').click(function() {
		$(this).fadeOut('50', function() {
			$('.mobile-menu-button').fadeIn('200');
		});
		$('.mobile-nav').animate({
			right: '-230px'
		}, 200);
		$('body').animate({
			right: '0px'
		}, 200);
	});


});
