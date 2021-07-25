const scrollBtn = $(".scroll-btn");
const header = $("#header");
const logoImg = $("#logo img");
const logoSource = $("#logo source");

function setInnerHeader() {
  logoImg.attr("src", logoBlackUrl);
  header.addClass("header_inner");
}

function setHomeHeader() {
  logoImg.attr("src", logoMainUrl);
  header.removeClass("header_inner");
}

function setStickyHeader() {
  header.addClass('fixed');
  logoImg.attr("src", logoSmallUrl);
  logoSource.attr("srcset", logoSmallUrl);
  // console.log('set');
}

function showStickyHeader() {
  header.addClass('show');
  // console.log('show');
}

function hideStickyHeader() {
  header.removeClass('show');
}

function destroyStickyHeader() {
  header.removeClass('fixed');
  logoImg.attr("src", logoMainUrl);
  logoSource.attr("srcset", logoMainUrl);
}

function showHero() {
  if ($(window).width() > 991) {
    // console.log('desctop')
    $('.js-show-banner').removeClass('js-slide-top');
    setTimeout(function () {
      $('.js-show-title').removeClass('js-slide-top');
    }, 400);
    setTimeout(function () {
      $('.js-show-header').removeClass('js-slide-down');
    }, 800);

  } else {
    $('.js-show-banner').removeClass('js-slide-top');
    $('.js-show-title').removeClass('js-slide-top');
    $('.js-show-header').removeClass('js-slide-down');
  }
}

function showOnScroll(scrollValue) {
  $('.js-scroll').each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
    if (sectionPos < windowPos) {
      elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
    }
  });
}

const humburger = $("#burger");
const headerMenu = $("#navbar");

// function openMenu() {
//   humburger.addClass('open');
//   headerMenu.addClass('open');
// }

function closeMenu() {
  humburger.addClass('collapsed');
  headerMenu.removeClass('show');
}

// function showContent() {
//   $(".main-wrapper").removeClass("js-fadeIn");
// }
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

$(document).ready(function () {
  initSupportSlider();
  initSupportSliderDown();
  initStepsSlider();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('body').scrollspy({
    target: '',
    offset: 200
  });
  showHero();



  // init odometer numbers on scroll
  function numbersInit() {
    $('.odometer').each(function () {
      var counter = $(this);
      var num = counter.attr('data-num');
      counter.html(num);
      if (counter.offset().top - $(window).scrollTop() < $(window).height() / 1.2) {
        counter.html(num);
      } else {
        return false
      }
    });
  }
  let startPosition = 0;
  $(window).scroll(function () {

    // if (scrollItem.length > 0) {
    //   // console.log($(this).find(scrollItem));
    //   if (scrollItem.hasClass('active')) {
    //     // scrollItemActive.find('.step-item__content').slideDown();
    //     console.log($(this));
    //   } else {
    //     // scrollItem.find('.step-item__content').slideUp( );
    //   }


    //   // if (this.hasClass('.active')) {
    //   //   // console.log(this);
    //   //   $(this.find('.step-item__content').slideDown());
    //   // } else {
    //   //   $('step-item__content').slideUp();
    //   // }
    // }

    let scrollValue = $(this).scrollTop();

    showOnScroll(scrollValue);

    scrollValue >= 1 ? closeMenu() : null;

    if (scrollValue > startPosition) {
      // console.log('down');
      if (scrollValue > 200) {
        setStickyHeader();
      }

      if (scrollValue > 400) {
        showStickyHeader();
      }

    } else {

      if (scrollValue < 400) {
        hideStickyHeader();
      }

      if (scrollValue < 200) {
        destroyStickyHeader();
      }
      // console.log('up');

    }
    startPosition = scrollValue

    // console.log(scrollValue);

    // if (scrollValue > 400) {
    //   showStickyHeader()
    // }
    // if (scrollValue > 1) {
    //   header.addClass('sticky');
    // } else {
    //   header.removeClass('sticky');
    //   // logoImg.attr("src", logoColorUrl);
    // }
    numbersInit();


    $(window).resize(function () {
      initSupportSlider();
      initSupportSliderDown();
      initStepsSlider();
    });
  });
  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }

  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });

  // if ($('#map')[0]) {
  //   google.maps.event.addDomListener(window, 'load', initMap);

  //   function initMap() {
  //     var myLatLng = {
  //       lat: -37.70145430229318,
  //       lng: 144.96689211017485
  //     };

  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 14,
  //       center: myLatLng,
  //       disableDefaultUI: true,
  //       styles: [{
  //           "featureType": "all",
  //           "elementType": "labels.text.fill",
  //           "stylers": [{
  //               "saturation": 36
  //             },
  //             {
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 40
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "all",
  //           "elementType": "labels.text.stroke",
  //           "stylers": [{
  //               "visibility": "on"
  //             },
  //             {
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 16
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "all",
  //           "elementType": "labels.icon",
  //           "stylers": [{
  //             "visibility": "off"
  //           }]
  //         },
  //         {
  //           "featureType": "administrative",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 20
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "administrative",
  //           "elementType": "geometry.stroke",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 17
  //             },
  //             {
  //               "weight": 1.2
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "landscape",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 20
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "poi",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 21
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "road.highway",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 17
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "road.highway",
  //           "elementType": "geometry.stroke",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 29
  //             },
  //             {
  //               "weight": 0.2
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "road.arterial",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 18
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "road.local",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 16
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "transit",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 19
  //             }
  //           ]
  //         },
  //         {
  //           "featureType": "water",
  //           "elementType": "geometry",
  //           "stylers": [{
  //               "color": "#000000"
  //             },
  //             {
  //               "lightness": 17
  //             }
  //           ]
  //         }
  //       ]
  //     });
  //     var icon = {
  //       url: './img/svg/map-point.svg', // url
  //       scaledSize: new google.maps.Size(50, 50), // scaled size
  //       // origin: new google.maps.Point(0,0), // origin
  //       // anchor: new google.maps.Point(0, 0) // anchor
  //     };
  //     var marker = new google.maps.Marker({
  //       position: myLatLng,
  //       map: map,
  //       title: 'Medentry',
  //       icon: icon,
  //     });
  //   }
  // }
});


$('#testimonialsSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('#testimonialsPrev'),
  nextArrow: $('#testimonialsNext'),
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});

$('#examSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('#examPrev'),
  nextArrow: $('#examNext'),
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});
$('#partnerSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplaySpeed: 10000,
  adaptiveHeight: true
});
$('#charitySlider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  prevArrow: $('#charityPrev'),
  nextArrow: $('#charityNext'),
  fade: false,
  speed: 1000,
  cssEase: 'linear',
  adaptiveHeight: true,
  rows: 1,
  slidesPerRow: 1,
  mobileFirst: true,
  responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        rows: 2,
        slidesToShow: 2,
        slidesPerRow: 2,
      }
    },
  ]
});

$('#videoSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrows: true,
  prevArrow: $('#videoPrev'),
  nextArrow: $('#videoNext'),
  fade: false,
  speed: 400,
  cssEase: 'linear',
  infinite: true,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    },
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    },
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
    }
  }, ]
});


function initPartnersSlider() {
  const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
  if ($(window).width() < 991 && !partnerSlider) {
    $('#partnerSlider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: false,
      autoplaySpeed: 10000,
      mobileFirst: true,
      responsive: [{
          breakpoint: 991,
          settings: 'unslick'
        },
        {
          breakpoint: 180,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });
  }
}

function initStepsSlider() {
  const supportSlider = document.querySelector('#stepsSlider.slick-slider');

  if ($(window).width() < 991 && !supportSlider) {
    $('#stepsSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: false,
      // verticalSwiping: true,
      adaptiveHeight: true,
      // customPaging: function (slider, index) {
      //   let pager = $(slider.$slides[index]).find('.steps__link');
      //   return pager;
      // }
    });
  }
}

function initSupportSlider() {
  const supportSlider = document.querySelector('#supportSlider.slick-slider');

  if ($(window).width() < 767 && !supportSlider) {
    $('#supportSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      // autoplay: false,
      dots: true,
      arrows: false,
      // prevArrow: $('#videoPrev'),
      // nextArrow: $('#videoNext'),
      // fade: false,
      // speed: 1000,
      // cssEase: 'linear',
      // infinite: true
      // autoplaySpeed: 10000,
      // adaptiveHeight: true
    });
  }
}


function initSupportSliderDown() {
  const supportSlider = document.querySelector('#supportSliderDown.slick-slider');

  if ($(window).width() < 767 && !supportSlider) {
    $('#supportSliderDown').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      // autoplay: false,
      dots: true,
      arrows: false,
      // prevArrow: $('#videoPrev'),
      // nextArrow: $('#videoNext'),
      // fade: false,
      // speed: 1000,
      // cssEase: 'linear',
      // infinite: true
      // autoplaySpeed: 10000,
      // adaptiveHeight: true
    });
  }
}

// Calculate the heighest slide and set a top/bottom margin for other children.
// As variableHeight is not supported yet: https://github.com/kenwheeler/slick/issues/1803
// var maxHeight = -1;
// $('.slick-slide').each(function () {
//   if ($(this).height() > maxHeight) {
//     maxHeight = $(this).height();
//   }
// });
// $('.slick-slide').each(function () {
//   if ($(this).height() < maxHeight) {
//     $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0');
//   }
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});