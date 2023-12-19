$(document).ready(function(){
    $('.review__slides').slick();
});
$('.review__slides').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});