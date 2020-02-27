$(document).ready(function(){

	(function() {
	  var hamburger = {
	    navToggle: document.querySelector('.nav-toggle'),
	    nav: document.querySelector('nav'),

	    doToggle: function(e) {
	      this.navToggle.classList.toggle('expanded');
	      this.nav.classList.toggle('expanded');
	    }
	  };

	  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

	}());
	

	$('.carousel .carousel-item').each(function() {
	    var minPerSlide = 4;
	    var next = $(this).next();
	    if (!next.length) {
	        next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));

	    for (var i = 0; i < minPerSlide; i++) {
	        next = next.next();
	        if (!next.length) {
	            next = $(this).siblings(':first');
	        }

	        next.children(':first-child').clone().appendTo($(this));
	    }
	});
});