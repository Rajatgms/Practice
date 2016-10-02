'use strict';

$(document).ready(function () {
	function myFunction() {
		    var x = document.getElementById("myTopnav");
		    if (x.className === "topnav") {
		        x.className += " responsive";
		    } else {
		        x.className = "topnav";
		    }

	}		

	$('#myTopnav li:last-child a').on('click', function(){
		$('#myTopnav').on('click', 'li a', myFunction);
	});

	$(window).on('resize', function(){
		if ($(window).width() > 680){
			$('#myTopnav').off('click');
		}
	})
});

