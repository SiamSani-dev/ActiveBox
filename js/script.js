$(function(){

  // ==========GO TO TOP PART START==========

  $('.go-to-top').on("click", function(){
    $("html,body").animate({scrollTop: 0}, 1000)
  })

  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if(scroll>300){
      $('.go-to-top').fadeIn(500)
    }else{
      $('.go-to-top').fadeOut(500)
    }
  })


  // ==========GO TO TOP PART END==========


    // ==========NAV SCR0LL START==========

    $(Window).scroll(function(){
      if( $(window).scrollTop() > 500){
        $(".menu").addClass('nav-scroll')
      }
      else{
        $(".menu").removeClass('nav-scroll')
      }
    });

    // ==========NAV SCR0LL END==========



});