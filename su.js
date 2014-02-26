$(document).ready(function() {
	rotateBg();
	animateLogo();
});

function rotateBg() {
	$('#animation').animate({opacity: '100%'}, {
		step: function(val) {
			var deg = val*36; 
			$(this).css('background-image', 'linear-gradient('+deg+'deg, #f400d4 0%,#77a4dd 100%, #f400d4 100%)');
		},
		duration: 100000,
		complete: rotateBg,
		easing: 'linear'
	});
}

function animateLogo() {
	$("#sulogo").animate({left: "1270px"}, 5000, 'linear', function() {
		$(this).animate({top: "430px"}, 3000, 'linear', function() {
			$(this).animate({left: "-150px"}, 5000, 'linear', function() {
				$(this).animate({top: "-150px"}, 3000, 'linear', animateLogo)
			})
		})
	})
}
