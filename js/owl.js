var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    smartSpeed:2000,
    autoplayHoverPause:true,
    autoplayTimeout:2500,
    // autoplaySpeed:4000,
    // slideTransition:'linear',
    stagePadding:50,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:2,
            dots:false,
        },
        1000:{
            items:3
        }
    }
});