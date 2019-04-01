
$('.filterCenter').selectize({
    create: false,
});

// Carrusel
$('.staticCarousel').owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        }
    }
});
$('.navCarousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    URLhashListener:true,
    startPosition: 'URLHash'
});
$('.autoCarousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
});
$('.multipleCarousel').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        }
    }
});

