$(document).ready(function() {

	$('.mobile-menu-button').click(function() {
		$(this).fadeOut('50', function() {
			$('.mobile-menu-close').fadeIn('0');
		});
		$('.mobile-menu-close .fa').animate({
			right: '245px'
		}, 200);
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
		$('.mobile-menu-close .fa').animate({
			right: '10px'
		}, 200);
		$('.mobile-nav').animate({
			right: '-230px'
		}, 200);
		$('body').animate({
			right: '0px'
		}, 200);
	});

	$('.p-description-wrapper').equalHeights();

	$('.showmore, .popup-link').magnificPopup({
		type: 'inline',
		cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
	});

	var touch = 'ontouchstart' in document.documentElement
	            || navigator.maxTouchPoints > 0
	            || navigator.msMaxTouchPoints > 0;

	if (touch) { // remove all :hover stylesheets
	    try { // prevent exception on browsers not supporting DOM styleSheets properly
	        for (var si in document.styleSheets) {
	            var styleSheet = document.styleSheets[si];
	            if (!styleSheet.rules) continue;

	            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	                if (!styleSheet.rules[ri].selectorText) continue;

	                if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                    styleSheet.deleteRule(ri);
	                }
	            }
	        }
	    } catch (ex) {}
	};

	$('.more-projects').click(function(event) {
		event.preventDefault();

		$('.all-projects-disable').fadeIn('slow', function() {
			$(this).removeClass('all-projects-disable');
		});

		$(this).fadeOut('slow');
	});
});
