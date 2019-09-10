(function ($) {
    "use strict"

    //* Fixing The Navbar
    function fix_navbar() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= $('header.header').height()) {
                $('header.header').addClass('fixed')
            } else {
                $('header.header').removeClass('fixed')
            }
        })
    }
    fix_navbar()

    //* Setting the services slider
    function services_slider() {
        $('.services .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            autoplay: false,
            smartSpeed: 2500,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            }
        })
    }
    services_slider();
})(jQuery)