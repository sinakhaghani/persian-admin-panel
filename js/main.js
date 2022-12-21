(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

/* Persina date picker */
$(document).ready(function (){
	$('.normal-example').persianDatepicker();

	$('.observer-example').persianDatepicker({
		observer: true,
		format: 'YYYY/MM/DD',
		altField: '.observer-example-alt'
	});

})


/* Persina date picker */
