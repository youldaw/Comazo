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

    $('.side-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            768:{
                items:1,
            },
            1400:{
                items:2,
            }
        }
    });

    $('.line-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });

    $('.resp-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });

    $(window).on('load resize', function () {
        if ($(this).width() > 1025) {
            $(".why-slide").trigger('destroy.owl.carousel');
        } else {
            $('.why-slide').owlCarousel({
                loop:false,
                margin:10,
                nav:true,
                dots:false,
                center: false,
                smartSpeed:900,
                items:4,
                navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
                responsive:{
                    0:{
                        items:2,
                    },
                    768:{
                        items:2.7,
                    },
                    1025:{
                        items:4,
                    }
                }
            });
        }
    });


    $('.modal-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:2,
            },
            900:{
                items:3,
            },
            1025:{
                items:4,
            }
        }
    });



    $('.product-popup-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            900:{
                items:1,
            },
            1025:{
                items:1,
            }
        }
    });



    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});





