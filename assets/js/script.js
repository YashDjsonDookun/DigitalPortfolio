$(document).ready(function () {
	const titleText =  document.querySelector('.titleText');
    const welcomeMsg =  document.querySelector('.welcomeMsg');
    const followAlong =  document.querySelector('.followAlong');
    const aboutMein = document.querySelector('.aboutMe');
    const aboutMyCourseIn = document.querySelector('.aboutMyCourse');
	splitScroll();

    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $("header").css("background-color", "rgba(0,0,0,0.25)");
        } else {
            $("header").css("background-color", "transparent");
        }
    });

	titleText.classList.add('animated', 'fadeInLeft');
	welcomeMsg.classList.add('animated', 'slideInUp');
	followAlong.classList.add('animated', 'zoomIn');

	$(".followAlong-btn").click(function() {
		$('html, body').animate({
		    scrollTop: $(".section-Middle").offset().top
		}, 1000)
		aboutMein.classList.add('animated', 'slideInLeft');
		aboutMyCourseIn.classList.add('animated', 'slideInRight');
	});
});

function splitScroll() {
	const controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		duration: '100%',
		triggerElement: '.aboutMe',
		triggerHook: 0
	})
	.setPin('.aboutMe')
	// .addIndicators()
	.addTo(controller);
}