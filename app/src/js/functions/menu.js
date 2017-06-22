function menu(){
	$('#menu-open').on('click', function(){
		document.getElementById("navigation").style.marginLeft = "0";
	});
	$('#menu-close').on('click',function(){
		document.getElementById("navigation").style.marginLeft = "-150%";
	});
}