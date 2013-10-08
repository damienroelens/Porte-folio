( function($) {
	"use strict";

	jQuery("document").ready(function($){
	    
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
	 
	});

	var iTrombiDelay = 8000,
		$trombiPhotos;
		
	var trombinext = function () {
		var $current, $next;
		( $current = $trombiPhotos.filter(":visible") ).delay(iTrombiDelay).fadeOut( function(){
			(($next = $current.next()).size() ? $next : $trombiPhotos.first()).fadeIn(trombinext);
		});
	};
	
	var clickFoto

	$( function(){
		
		( $trombiPhotos = $("#wrapper figure")).not(":first").hide();
		trombinext();
		
	});

}).call(this,jQuery);