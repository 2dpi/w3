$(document).ready(function(){
	$(".toggle_show").hide();
	$(".toggle").click(function () {
		$(this).parent().parent().next('.toggle_hide').toggle();
		$(this).parent().parent().next('.toggle_show').toggle();
		// $(this).nextUntil(".toggle_hide").toggle();
		// $(this).nextUntil(".toggle_show").toggle();
	});
});
