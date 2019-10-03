$(document).ready(function() {
    const titleText = document.querySelector('.titleText');
    const welcomeMsg = document.querySelector('.welcomeMsg');
    const followAlong = document.querySelector('.followAlong');
    const aboutMein = document.querySelector('.aboutMe');
    const aboutMyCourseIn = document.querySelector('.aboutMyCourse');
    const width = $(window).width();

    if (width > 1440) {
        splitScroll();
    }

    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $("header").css("background-color", "rgba(10, 36, 47, 0.95)");
            $("header").addClass('sticky');
            aboutMein.classList.add('animated', 'slideInLeft');
            aboutMyCourseIn.classList.add('animated', 'slideInRight');
        } else {
            $("header").css("background-color", "transparent");
            $("header").removeClass('sticky');
            aboutMein.classList.remove('animated', 'slideInLeft');
            aboutMyCourseIn.classList.remove('animated', 'slideInRight');
        }
    });

    titleText.classList.add('animated', 'fadeInLeft');
    welcomeMsg.classList.add('animated', 'slideInUp');
    followAlong.classList.add('animated', 'zoomIn');

    $(".followAlong-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".aboutMe").offset().top
        }, 1000)
        aboutMein.classList.add('animated', 'slideInLeft');
        aboutMyCourseIn.classList.add('animated', 'slideInRight');
    });
});

function splitScroll() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            duration: '100%',
            triggerElement: '.section-One',
            triggerHook: 0
        })
        .setPin('.aboutMe')
        .addIndicators()
        .addTo(controller);
}