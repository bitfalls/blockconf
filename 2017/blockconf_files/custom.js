$(document).ready(function() {
    'use strict';
    
    /*==========================================================
		 Pre-Loader
	==========================================================*/
	
	$(window).on('load', function() {
		// will first fade out the loading animation
		$(".preloader").fadeOut();
		//then background color will fade out slowly
		$(".preloader-wrapper").delay(200).fadeOut("slow");
	});
    
    /*==========================================================
		 Smooth scroll
	==========================================================*/
    $('a[href*="#"]:not([href="#"]):not(a[data-toggle="collapse"]):not([data-toggle="tab"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    /*==========================================================
		 Go To Top
	==========================================================*/
	
	$(window).scroll(function() {
	   if ($(this).scrollTop() > 200) {
		  $('#go-to-top a').fadeIn('slow');
		  } else {
		  $('#go-to-top a').fadeOut('slow');
		} 
	});
  
	$('#go-to-top a').on( "click",function(){
	  $("html,body").animate({ scrollTop: 0 }, 750);
	  return false;
	});
    
    /*==========================================================
		 WOW
	==========================================================*/
	
	var wow = new WOW(
	{
		mobile: false
	});
	wow.init();

});