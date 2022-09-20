feather.replace()
$(function(){
    $(".btn-service button").click(function(){
        $(".btn-service button").removeclass("active")
    })
    // slick slider
    $('.fadebook').slick({
        dots: true,
        // infinite: true,
        speed: 300,
        slidesToShow: 1,
        // centerMode: true,
        // variableWidth: true,
        prevArrow:".prevArr",
        nextArrow:".nextArr",
      });
})
var mixer = mixitup('.service-part');
AOS.init(500);