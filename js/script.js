$(function (){
    
    $('.navbar-toggler, .close-menu-btn').on('click',function(e){
        e.preventDefault();
        $('.header').toggleClass('active');
    });


    $('.header-top-slide').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        smartSpeed:900,
        slideTransition: 'linear',
        autoplay:false,
        autoplayTimeout:2000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        autoWidth: true,
        items:1,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                margin:20,
            },
            1000:{
                items:1,
                margin:30,
            }
        }
    });


});





