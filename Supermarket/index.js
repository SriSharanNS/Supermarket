
AOS.init();


$(document).ready(function() {
  
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      arrows:false,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
          }
        }
        
      ]
    });
    });


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >30) {
        $('.hm').addClass('att');
        $('.ab').removeClass('att');
        $('.ce').removeClass('att');
        $('.aw').removeClass('att');
        $('.ga').removeClass('att');
        $('.st').removeClass('att');
        $('.re').removeClass('att');
        $('.co').removeClass('att');
        }
        if($(this).scrollTop() >450)
        {
            $('.hm').removeClass('att');
            $('.ab').addClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >1000)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').addClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >1300)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').addClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >1800)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').addClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >2600)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').addClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >3800)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').addClass('att');
            $('.co').removeClass('att');
        }
        if ($(this).scrollTop() >4000)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').addClass('att');
        }
        if($(this).scrollTop() <5)
        {
            $('.hm').removeClass('att');
            $('.ab').removeClass('att');
            $('.ce').removeClass('att');
            $('.aw').removeClass('att');
            $('.ga').removeClass('att');
            $('.st').removeClass('att');
            $('.re').removeClass('att');
            $('.co').removeClass('att');
        }
        
    });
});

