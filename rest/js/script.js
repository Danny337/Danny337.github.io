menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if(x.className === "topnav"){
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}

$(document).ready(function(){ //плавные переходы
$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});