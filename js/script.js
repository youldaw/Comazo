$(function (){
    
    $('.mob-menu-btn, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.navbar').toggleClass('active');
    });

    $('.mob-filter-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.catalog-filter').toggleClass('active');
    });
    $(document).mouseup(function (e){
        var div = $(".mob-filter-btn, .catalog-filter");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });

    $('.ftr-menu p').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('.size-item').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.colors span a').on('click',function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    $('.modal-body .determine-size p').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('show');
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
                items:2,
            },
            580:{
                items:2,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1000:{
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
                loop:false,
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
                loop:false,
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
                        items:1,
                    },
                    768:{
                        items:2,
                    },
                    992:{
                        items:3,
                    },
                    1025:{
                        items:4,
                    }
                }
            });
        }
    });


    $(window).on('load resize', function () {
        if ($(this).width() > 767) {
            $(".mob-slide").trigger('destroy.owl.carousel');
        } else {
            $('.mob-slide').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                dots:true,
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
                    }
                }
            });
        }
    });

    $(window).on('load resize', function () {
        if ($(this).width() > 767) {
            $(".catalog-collection").trigger('destroy.owl.carousel');
        } else {
            $('.catalog-collection').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                dots:false,
                center: true,
                smartSpeed:900,
                items:4,
                navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
                responsive:{
                    0:{
                        items:3,
                    },
                    480:{
                        items:4,
                    }
                }
            });
        }
    });

    $('.cat-top-slide').owlCarousel({
        loop:false,
        margin:0,
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
            580:{
                items:1,
            },
            1000:{
                items:1,
            }
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
                items:3,
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






    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    
    });


    jQuery(document).ready(function() {
        $('.upper').on('input', setFill);
        $('.lower').on('input', setFill);

        var max = $('.upper').attr('max');
        var min = $('.lower').attr('min');

        function setFill(evt) {
            var valUpper = $('.upper').val();
            var valLower = $('.lower').val();
            if (parseFloat(valLower) > parseFloat(valUpper)) {
                var trade = valLower;
                valLower = valUpper;
                valUpper = trade;
            }
            
            var width = valUpper * 100 / max;
            var left = valLower * 100 / max;
            $('.fill').css('left', 'calc(' + left + '%)');
            $('.fill').css('width', width - left + '%');
            
            // Update info
            if (parseInt(valLower) == min) {
                $('.easy-basket-lower').val('0 ₽');
            } else {
                $('.easy-basket-lower').val(parseInt(valLower) + ' ₽');
            }
            if (parseInt(valUpper) == max) {
                $('.easy-basket-upper').val('5000 ₽');
            } else {
                $('.easy-basket-upper').val(parseInt(valUpper) + ' ₽');
            }
        }
        
        $('.easy-basket-filter-info input').keyup(function() {
            var valUpper = $('.easy-basket-upper').val();
            var valLower = $('.easy-basket-lower').val();
            var width = valUpper * 100 / max;
            var left = valLower * 100 / max;
            if ( valUpper > 5000 ) {
                var left = max;
            }
            if ( valLower < 0 ) {
                var left = min;
            } else if ( valLower > max ) {
                var left = min;
            }
            $('.fill').css('left', 'calc(' + left + '%)');
            $('.fill').css('width', width - left + '%');
            // меняем положение ползунков
            $('.lower').val(valLower);
            $('.upper').val(valUpper);
        });
        $('.easy-basket-filter-info input').focus(function() {
            $(this).val('₽');
        });
        $('.easy-basket-lower').blur(function() {
            var valLower = $('.lower').val('');
            $(this).val(Math.floor(valLower));
        });
        $('.easy-basket-upper').blur(function() {
            var valUpper = $('.upper').val('');
            $(this).val(Math.floor(valUpper));
        });
        
    });


});





