function scroll(){	

	var $root = $('html, body');
	$(window).scroll(function(){
		if( $(window).scrollTop() >= 10) {
			document.getElementById("top").style.height = "50px"; 
			$("#top strong").hide();
		}else{
			document.getElementById("top").style.height = "100px"; 	
			$("#top strong").show();
		}
	});
	$('a').on('click',function() {
		document.getElementById("navigation").style.marginLeft = "-150%";
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});
};