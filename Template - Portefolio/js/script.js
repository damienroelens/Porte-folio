( function($) {
	"use strict";

	jQuery("document").ready(function($){
	    
	    var nav = $('.nav-container');
	    var cont = $('#present');
	    
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

}).call(this,jQuery);