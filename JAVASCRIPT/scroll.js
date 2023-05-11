$(window).scroll(function () {
	
	TypingInit();
	TypingAnime();
});
var arr = []

function TypingInit() {
	$('.text-random').each(function (i) { 
		arr[i] = new ShuffleText(this);
	});
}
function TypingAnime() {
	$(".text-random").each(function (i) {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			if(!$(this).hasClass("endAnime")){
				arr[i].start();
				arr[i].duration = 800;
				$(this).addClass("endAnime");
			}
		}else{
			$(this).removeClass("endAnime"); 
		}
	});
}