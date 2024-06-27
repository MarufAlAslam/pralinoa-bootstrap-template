$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slideToScroll: 1
});


$('.dual-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slideToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});