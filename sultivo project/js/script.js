$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$(document).ready(function(){
    $('.slick-slider').slick({
      nextArrow:".nextarr",
      prevArrow:".prevarr",
    });
  });

var mixer = mixitup('.ruman');
new VenoBox({
  selector: ".my-custom-links"
});