$(function(){
    $(".close-btn").click(function(){
        $(".get-offer").slideUp(500)
    })
})

$('.ruman').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow:".next",
    prevArrow:".prev",
  })
  $('.ruman-2').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow:".nextarr",
    prevArrow:".prevarr",
  })

  AOS.init(566);