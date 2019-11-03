"use strict"

TweenMax.from(".logo", 1, {
    delay: .4,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})

TweenMax.from(".slogon", 1.4, {
    delay: .4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
})

TweenMax.from(".menu-btn", 1.5, {
    delay: .2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".search", 1.5, {
    delay: .2,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
})

TweenMax.from(".contact", 1, {
    delay: .4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".text", 1, {
    delay: 1.2,
    opacity: 0,
    x: -140,
    ease: Expo.ease
})

TweenMax.from(".n-gon", 1, {
    delay: 1.2,
    opacity: 0,
    y: -40,
    ease: Expo.ease
})

TweenMax.from(".year", 0.8, {
    delay: 1.6,
    opacity: 0,
    x: -50,
    ease: Expo.ease
})

TweenMax.from(".plus", 1, {
    delay: 2,
    opacity: 0,
    x: -50,
    rotation: 135,
    ease: Expo.ease
})

TweenMax.from(".left-arrow", 0.8, {
    delay: 2.2,
    opacity: 0,
    x: -50,
    ease: Expo.ease
})

TweenMax.from(".right-arrow", 0.8, {
    delay: 2.2,
    opacity: 0,
    x: 50,
    ease: Expo.ease
})

TweenMax.from(".h-line", 1.5, {
    delay: 2.5,
    opacity: 0,
    x: -50,
    ease: Expo.ease
})

TweenMax.staggerFrom(".links a", .7, {
    delay: 2,
    opacity: 0,
    y: 50,
    ease: Expo.ease
}, .2)