var owl1 = $('.highlights');
owl1.owlCarousel({
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

// var owl2 = $('.sponsors');
// owl2.owlCarousel({
//     loop:true,
//     // items:3,
//     center:true,
//     margin:500,
//     nav:false,
//     autoplay:true,
//     slideTransition:'linear',
//     autoplayTimeout:7000,
//     autoplaySpeed:7000,
//     autoplayHoverPause:true,
//     dots:false,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:2,
//         },
//         1000:{
//             items:3
//         }
//     }
// });