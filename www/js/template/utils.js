$(document).ready(function(){
	$(".toggle_show").hide();
	$(".toggle").click(function () {
		$(this).nextUntil(".toggle_hide").toggle();
		$(this).nextUntil(".toggle_show").toggle();
	});
});
