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
    //* The testimonials slider
    _slider('.testimonials .owl-carousel', 2, 3, 3)
    //* The services testimonials slider
    _slider('.services-testimonials .owl-carousel', 1, 1, 1)


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

    //* Skills
    $(".skill_main").each(function () {
        $(this).waypoint(function () {
            var progressBar = $(".progress-bar");
            progressBar.each(function (indx) {
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });

    /* portfolio */
    $(window).on('load', function () {
        $('.portfolio-filter ul li').on('click', function () {
            $('.portfolio-filter ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $workGrid.isotope({
                filter: data
            });
        });

        if (document.querySelector('section.portfolio')) {
            var $workGrid = $('.portfolio-grid').isotope({
                itemSelector: '.all',
                percentPosition: false,
                masonry: {
                    columnWidth: '.all'
                }
            });
        }
    });


    /* contact */
    $('section.email-us form button.send').on("click", function (e) {
        e.preventDefault()
        let name = $('section.email-us input.name')
        let email = $('section.email-us input.email')
        let subject = $('section.email-us input.subject')
        let message = $('section.email-us textarea.message')

        if (email.val() == "" || message.val() == "") {
            $("section.email-us .form .alert").addClass("error").removeClass("success")
            $("section.email-us .form .alert p").text("There was an error sending your email please try again later.")
            return false
        } else {
            $("section.email-us .form .alert").removeClass("error").addClass("success")
            $("section.email-us .form .alert p").text("Your email has been sent.")
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/ {{ your email }}',
                data: {
                    message: message.value,
                    name: name.value,
                    subject: subject.value
                },
                datatype: 'json'
            })
        }

    })

    // GSAP & ScrollMagic

    //  Home Page
    TweenMax.from(".logo", 1.5, {
        delay: 1.2,
        opacity: 0,
        x: -100,
        ease: Expo.ease
    })

    TweenMax.from(".navbar", 1.2, {
        delay: 0.3,
        opacity: 0,
        x: 100,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .title h3", 1.7, {
        delay: .2,
        opacity: 0,
        y: 200,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .title h1", 1.7, {
        delay: .9,
        opacity: 0,
        y: 200,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .title p", 1.7, {
        delay: 1.6,
        opacity: 0,
        y: 200,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .buttons button:first-child", 1, {
        delay: 2,
        opacity: 0,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .buttons button:last-child", 1, {
        delay: 2,
        opacity: 0,
        ease: Expo.ease
    })

    TweenMax.from("section.banner .image", 1.7, {
        delay: 2,
        opacity: 0,
        y: -200,
        ease: Expo.ease
    })

    // GSAP & ScrollMagic

    var animate = new TimelineMax({
        paused: false
    })
    animate.from("section.intro .introduction", 1.5, {
        opacity: 0,
        x: -100,
        ease: Expo.ease
    }).from("section.intro .image", 1.7, {
        delay: -1.5,
        opacity: 0,
        y: 200,
        ease: Expo.ease
    })

    const controller = new ScrollMagic.Controller()
    var scene = new ScrollMagic.Scene({
            triggerElement: "section.intro"
        })
        .setTween(animate)
        .addTo(controller)


    TweenMax.from("._banner .background", 1.9, {
        delay: 0.7,
        opacity: 0,
        y: -400,
        ease: Expo.ease
    })

    TweenMax.from("._banner h1", 1.5, {
        delay: 1.2,
        opacity: 0,
        y: 400,
        ease: Expo.ease
    })

    TweenMax.from("._banner p", 1.8, {
        delay: 1.5,
        opacity: 0,
        y: 400,
        ease: Expo.ease
    })


})(jQuery)