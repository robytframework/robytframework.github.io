function discall() {
	$(".textintro h1").addClass("fadeOutRight");
	$(".textintro p").addClass("fadeOutLeft");
	setTimeout(function () {
		$("#nonenext").css("display", "none");
	}, 1100);
}