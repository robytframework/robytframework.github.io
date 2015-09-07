function discall() {
	$(".textintro h1").addClass("fadeOutRight");
	$(".textintro p").addClass("fadeOutLeft");
	setTimeout(function () {
		$("#nonenext").css("display", "none");
	}, 1100);
	setTimeout(function () {
		$(".thingsframe h2").css("display", "block");
		$(".thingsframe h2").addClass("fadeIn");
	}, 1400);
	setTimeout(function () {
		$("#arti1").css("display", "block");
		$("#arti1").addClass("fadeIn");

		$("#arti2").css("display", "block");
		$("#arti2").addClass("fadeIn");

		$("#arti3").css("display", "block");
		$("#arti3").addClass("fadeIn");

		$("#arti4").css("display", "block");
		$("#arti4").addClass("fadeIn");

		$("#arti5").css("display", "block");
		$("#arti5").addClass("fadeIn");

		$("#arti6").css("display", "block");
		$("#arti6").addClass("fadeIn");
	}, 1800);
}