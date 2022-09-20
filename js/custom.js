$(function () {

  //js for banner
  $('.banner-slider').slick({
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  //js for about pop
  new VenoBox({
    selector: ".my-video-links",
  });

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });

  //js for team slick
  $('.team-slider').slick({
    arrows: false,
    slidesToScroll: 3,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  });

  // js for feedback row
  $('.feedback-slider').slick({
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    dots: true,
    responsive: [{
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  //js for funfact
  $('.counter').counterUp({
    delay: 10,
    time: 2500,
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 350) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  })


  $('.back-to-top').click(function () {
    $('html').animate({
      scrollTop: 0,
    }, 1500);

  });

});