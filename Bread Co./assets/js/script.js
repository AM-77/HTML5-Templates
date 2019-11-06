"use strict"

document.addEventListener('DOMContentLoaded', () => {

    let sidNav = document.querySelector('.sidenav')
    M.Sidenav.init(sidNav, {})

    let parallax = document.querySelectorAll('.parallax')
    M.Parallax.init(parallax, {})

    let carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: false,
        dist: -100,
        numVisible: 5
    })

    let tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {
        swipeable: true
    })


})