$(document).ready(function(){

	// sticky menu 
	function reinit(){
		var test = $('.nav-head');
		var top = test.height();
		$('body').offset({top:top});
	};

	reinit();

	$( window ).resize(function() {
		reinit();
	});
	// end sticky menu 

	// main nav
	$('.mobile-menu-toggle').click(function() {
	  $('.navbar-style').slideToggle(500);
	});
	//end slide toggle

	// resize
	$(window).resize(function() {   
	  if (  $(window).width() > 500 ) {     
	    $('.navbar-style').removeAttr('style');
	   }
	});
	//end resize

	$('.js-toggle-menu').click(function(e){
	  e.preventDefault();
	  $(this).toggleClass('open');
	  $('.page-wrap').toggleClass('disabled');
	  $('body').toggleClass('disabled');
	});
	// end main nav

	// OWL 
	$('.owl-carousel').owlCarousel({
	        loop:true,
	        margin:20,
	        nav:true,
	        dots:false,
	        navText: ['<div class="owl-custom-nav owl-nav-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>','<div class="owl-custom-nav owl-nav-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
	        responsive:{
	            0:{
	                items:1
	            }
	        }
    })
	// end OWL

	// To top
	if ( ($(window).height() + 100) < $(document).height() ) {
	    $('#top-link-block').removeClass('hidden').affix({
	        // how far to scroll down before link "slides" into view
	        offset: {top:100}
	    });
	}
	// end To top

	//smooth scrolling
	$("ul.navbar-style  li a[href^='#']").on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){
	       window.location.hash = hash;
	     });
	});
	// end smooth scrolling

});

