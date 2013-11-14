$(function() {

	$(".fl [placeholder]").each(function() {
		$(this).before('<span id="fl-'+$(this).attr("placeholder")+'" class="placeholder">'+$(this).attr("placeholder")+'</span>');
	});

	$(".fl [placeholder]").on("keyup", function() {

		if($(this).val() != '') {
			$('.fl #fl-'+$(this).attr("placeholder")).addClass("show");
		} else {
			$('.fl #fl-'+$(this).attr("placeholder")).removeClass("show");
		}

	});

});