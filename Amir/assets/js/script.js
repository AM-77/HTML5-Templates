(function ($) {
    "use strict"

    //* Fixing The Navbar
    function _fix_navbar() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= $('header.header').height()) {
                $('header.header').addClass('fixed')
            } else {
                $('header.header').removeClass('fixed')
            }
        })
    }
    _fix_navbar()


    //* The sliders
    function _slider(selector, items_0, items_900, items_1200) {
        $(selector).owlCarousel({
            nav: true,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            rtl: false,
            loop: true,
            margin: 30,
            items: 3,
            autoplay: false,
            smartSpeed: 700,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: items_0
                },
                900: {
                    items: items_900
                },
                1200: {
                    items: items_1200
                }
            }
        })
    }

    //* The services slider
    _slider('.services .owl-carousel', 1, 2, 3)
    //* The clients slider
    _slider('.clients .owl-carousel', 1, 2, 2)


    //* Facts Counter
    function _count_facts() {
        if ($(".facts")) {
            $('.counter').counterUp({
                delay: 10,
                time: 700
            })
        }
    }
    _count_facts()


    //* Qualifications content
    function _show_content() {
        $(window).scroll(function () {
            //* Check the location of each element hidden 
            $('.qualifications .content').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                //* If the object is completely visible in the window, fadeIn it 
                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({
                        'opacity': '1'
                    }, 700)
                }
            })
        })
    }
    _show_content()



})(jQuery)