$( document ).ready(function() {

	$('nav ul li').click(function () {
		$('html,body').animate({ scrollTop: $('#subpage-content').offset().top}, 'slow');
	})
	$('#content div a').click(function () {
		$('html,body').animate({ scrollTop: $('#subpage-content').offset().top}, 'slow');
	})
	
	  $(window).keydown(function(event){
		if(event.keyCode == 13) {
		  event.preventDefault();
		  return false;
		}
	  });
	
	$('.button-collapse').click(function(event) {
		event.preventDefault();
		$('#mobile-menu').slideToggle( "slow");
 	});
	
	$('nav ul li').click(function() {
		$('#mobile-menu').hide()
 	});
	
	function editSuccess() {
		Materialize.toast('Edytowano kontakt', 5000);
	}
	 
});