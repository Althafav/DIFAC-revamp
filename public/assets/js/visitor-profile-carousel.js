$(".Visitor-profle").owlCarousel({
    navigation: true,
    items: 1,
    slideSpeed: 1000,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});


$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel();

   

    $('.owl-next-custom').click(function () {
        owl.trigger('next.owl.carousel');
    })
});