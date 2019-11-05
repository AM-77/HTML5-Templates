"use strict"



document.addEventListener('DOMContentLoaded', () => {

    let sidNav = document.querySelector('.sidenav')
    M.Sidenav.init(sidNav, {})

    let elems = document.querySelectorAll('.parallax')
    let instances = M.Parallax.init(elems, {})

})