$(document).ready(function() {
    if (window.location.href.includes('index.html') || window.location.href == "http://127.0.0.1:8080/" || window.location.href == "https://yashdjsondookun.github.io/DigitalPortfolio/") {
        // alert("test");
        const titleText = document.querySelector('.titleText');
        const welcomeMsg = document.querySelector('.welcomeMsg');
        const followAlong = document.querySelector('.followAlong');
        const aboutMein = document.querySelector('.aboutMe');
        const aboutMyCourseIn = document.querySelector('.aboutMyCourse');
        const width = $(window).width();

        // if (width > 1440) {
        splitScroll();
        // }

        keepStickyNav();

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
    } else if (window.location.href.includes("animations.html")) {
        photoshopAnimation();
        keepStickyNav();
    }

    $(".link-oldPortfolio").css("cursor", "pointer");

    $(".vector").hover(function() {
        if (confirm("I've Talked about this particular topic in my old Portfolio, Want to check it out?")) {
            window.location.href = "https://sites.google.com/umail.uom.ac.mu/djson/visual-communication/raster-vs-vector";
        }
    });
});


function keepStickyNav() {
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
}

function photoshopAnimation() {
    // Photoshop Animation
    anime.timeline({ loop: true })
        .add({
            targets: '.photoShopAnimation .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i
        }).add({
            targets: '.photoShopAnimation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

function splitScroll() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            duration: '100%',
            triggerElement: '.section-One',
            triggerHook: 0
        })
        .setPin('.aboutMe')
        // .addIndicators()
        .addTo(controller);
}

// Toggles drop down menu list
function toggleDropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.projects')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openPage(page) {
    if (page == 'Valentines') {
        window.open('./assets/images/AdobeAnimate/AdobeAnimate_Animations/Valentines/ValentinesCard.html', '_blank')
    }
    if (page == 'DragDrop') {
        window.open('./assets/images/AdobeAnimate/AdobeAnimate_Animations/Drag_and_Drop/DragDrop.html', '_blank')
    }
    if (page == 'practical_ad') {
        window.open('./assets/images/AdobeAnimate/AdobeAnimate_Animations/Practical_ad/practical5js.html', '_blank')
    }
    if (page == 'corona') {
        window.open('./assets/images/AdobeAnimate/AdobeAnimate_Animations/Corona/coronaanimation.html', '_blank')
    }
    if (page == 'coro-game') {
        window.open('./assets/images/AdobeAnimate/AdobeAnimate_Animations/CoroGame/yash.html', '_blank')
    }
}