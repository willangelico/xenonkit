/*
Function to change the heigth of the element to the same height of the window
 */
function heightFold(divId){
	//get the element
	var div = document.getElementById(divId);
	//change the height
	div.style.minHeight = window.innerHeight+'px';
}