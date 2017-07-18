$(document).ready(function(){

	$("#trigger-overlay").click(function(){
		$('.overlay').fadeIn(1000);

	});

 	/*--- Hide information modal box ---*/
 	$("a.close").click(function(){
 		$(".overlay").fadeOut(1000);
});
});
