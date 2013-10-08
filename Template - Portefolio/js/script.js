( function($) {
	"use strict";

	var iTrombiDelay = 8000,
		$trombiPhotos;
/*	
	var $phtos = $('#wrapper img').css({
			width : 100,
			height : 100,
	});

	var $figu = $('#wrapper figure').css({
			display : block
	});
*/
	var trombinext = function () {
		var $current, $next;
		( $current = $trombiPhotos.filter(":visible") ).delay(iTrombiDelay).fadeOut( function(){
			(($next = $current.next()).size() ? $next : $trombiPhotos.first()).fadeIn(trombinext);
		});
	};

	$( function(){
		
		( $trombiPhotos = $("#wrapper figure")).not(":first").hide();
		trombinext();
		
	});

	var nav = $('.nav-container');
	    var cont = $('#wrapper');
	    
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            nav.addClass("f-nav");
	            cont.addClass("cont-up");
	        } else {
	            nav.removeClass("f-nav");
	            cont.removeClass("cont-up");
	        }
	    });

}).call(this,jQuery);