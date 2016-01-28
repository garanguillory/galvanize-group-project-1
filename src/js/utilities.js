$(document).on('ready', function() {
		var $optionSmall = $('.option-small');
		var $optionMedium = $('.option-medium');
		var $optionLarge = $('.option-large');


			// $optionSmall.on('click', function(){
			// 	// remove hidden
			// 	$('.small').removeClass('hidden');
			// 	$('.small').removeClass('hidden');
			// 	$('.small').removeClass('hidden');

			// 	$('.medium').toggleClass('hidden');
			// 	$('.large').toggleClass('hidden');
			// });

			$optionSmall.on('click', function(){
				$('.medium').toggleClass('hidden');
				$('.large').toggleClass('hidden');
			});

			$optionMedium.on('click', function(){
				$('.small').toggleClass('hidden');
				$('.large').toggleClass('hidden');
			});

			$optionLarge.on('click', function(){
				$('.small').toggleClass('hidden');
				$('.medium').toggleClass('hidden');
			});			
});



// $('.large').filter(function(){
// 	$('.small').addClass('hidden');
// 	$('.medium').addClass('hidden')
// });


// if small and only small is clicked, 
// addClass 'hidden' to $('.large') and 
// $('.medium') elements

// if small and medium are clicked,
// addClass 'hidden' to $('large') elements

// if small and large are clicked,
// addClass 'hidden' to $('medium') elements

// if small, medium, and large are clicked,
// nothing gets filtered (max two sizes can be slected at a time)


























