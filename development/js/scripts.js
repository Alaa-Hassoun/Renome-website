$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        items: 1,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                nav:false,
                dots:true
            },
        
            556: {
                nav:true,
                dots:false
            }
        }
    });

    //AOS animations
    AOS.init({
        offset: 200,
        duration: 700,
        easing: 'ease-in-sine',
        delay: 100,
    });

    // Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel':false,
        'fitImagesInViewport': true
    })  

    // // Progress bar
    // $(window).load(function(){
    //     $(window).scroll(function() {
    //       var wintop = $(window).scrollTop(), docheight = $('main').height(), winheight = $(window).height();
    //       console.log(wintop);
    //       var totalScroll = (wintop/(docheight-winheight))*100;
    //       console.log('total scroll' + totalScroll);
    //       $('.KW_progressBar').css('width',totalScroll+'%');
    //     });  
    // });
    
    // // Scrolled navigation
    //     var scrollTop = 0;
    //     $(window).scroll(function(){
    //       scrollTop = $(window).scrollTop();
    //        $('.counter').html(scrollTop);
          
    //       if (scrollTop >= 100) {
    //         $('.header').addClass('header-scroll');
    //       } else if (scrollTop < 100) {
    //         $('.header').removeClass('header-scroll');
    //       } 
          
    //     });   

    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

});