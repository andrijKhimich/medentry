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
  console.log('set');
}

function showStickyHeader() {
  header.addClass('show');
  console.log('show');
}

function hideStickyHeader() {
  header.removeClass('show');
}

function destroyStickyHeader() {
  header.removeClass('fixed');
  // header.removeClass('show');
  logoImg.attr("src", logoMainUrl);
  logoSource.attr("srcset", logoMainUrl);
}

// const showOnLoadEl = $('.js-show-on-load');

function showHero() {
  if ($(window).width() > 991) {
    console.log('desctop')
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

$(document).ready(function () {

  // show all content when dociment ready
  // showContent();
  // if ($(window).width() > 991) {
  //   console.log('desctop')

  // }

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

  // function setZindex() {

  //   let startedBoxElem = $('.started-box');
  //   let startedBoxes = $('.started-box').length;

  //   // console.log(startedBoxes)
  //   // for (let i = 0; i < startedBoxes; i++) {
  //   //   console.log(i);
  //   //   // startedBoxElem.css('z-index', i);
  //   //   // return false;

  //   // }
  //   let i = startedBoxes;
  //   startedBoxElem.each(function () {
  //     $(this).css('z-index', i--);
  //   })
  // }
  // setZindex();
  let startPosition = 0;

  $(window).scroll(function () {
    let scrollValue = $(this).scrollTop();

    showOnScroll(scrollValue);

    scrollValue >= 1 ? closeMenu() : null;

    if (scrollValue > startPosition) {
      console.log('down');
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
      console.log('up');

    }
    startPosition = scrollValue

    console.log(scrollValue);

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

// slow scroll to id (jQuery)

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

// slow scroll to id (vanila JS)

// const menuLinks = document.querySelectorAll('.nav-menu__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(function (menuLink) {
//   menuLink.addEventListener('click', onMenuLinkClick)
//   })
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.js-header').offsetHeight;
//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       e.preventDefault()
//     }
//   }
// }


$('#testimonialsSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: false,
  // dots: false,
  arrows: true,
  prevArrow: $('#testimonialsPrev'),
  nextArrow: $('#testimonialsNext'),
  // infinite: true,
  // fade: true,
  // verticalSwiping: true,
  // speed: 1000,
  // cssEase: 'linear',
  // autoplaySpeed: 10000,
  // dots: false,
  // vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // verticalSwiping: true,
});

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