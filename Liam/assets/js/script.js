const menuBtn = $("button.menu_btn")
const body = $("body")

menuBtn.on("click", function() {
  if (menuBtn.hasClass("menu_open")) {
    menuBtn.removeClass("menu_open").addClass("menu_close")
    body.removeClass("close_nav").addClass("open_nav")
  } else { 
    menuBtn.removeClass("menu_close").addClass("menu_open")
    body.removeClass("open_nav").addClass("close_nav")
  }
})

if ($('body.home').length) {

  const $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: { fitWidth: true }
  })
  
  $('.filters-button-group').on('click', 'button', function() {
    const filter = $(this).attr('data-filter')
    $grid.isotope({ filter })
  })
  
  $('.button-group').each(function(index, buttonGroup) {
    const $buttonGroup = $(buttonGroup)
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked')
      $(this).addClass('is-checked')
    })
  })
  
  $(".grid-item .infos").each(function(index, infos) { 
    const $infos = $(infos)
    $infos.on("mouseover", function() { 
      $infos.removeClass("hide").addClass("show")
    })
  })
  
  $(".grid-item .infos").each(function(index, infos) { 
    const $infos = $(infos)
    $infos.on("mouseout", function() { 
      $infos.removeClass("show").addClass("hide")
    })
  })
  
  $('#lightgallery').lightGallery()

  ScrollReveal().reveal('.grid-item', { scale: 0.95, opacity: 0, delay: 200, duration: 1000 })
}
