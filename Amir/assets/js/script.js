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
            nav: true,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            rtl: !true,
            loop: true,
            margin: 30,
            items: 3,
            autoplay: true,
            smartSpeed: 700,
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
                    items: 3
                }
            }
        })
    }
    services_slider();
})(jQuery)