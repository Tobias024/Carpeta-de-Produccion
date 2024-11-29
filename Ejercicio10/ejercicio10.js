$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true
    });

    $('#whatsapp-btn').on('click', function() {
        window.open('https://wa.me/1134990165?text=Hola!', '_blank');
    });

    var scene = document.getElementById('parallax-container');
    var parallaxInstance = new Parallax(scene);

    $('.slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});
