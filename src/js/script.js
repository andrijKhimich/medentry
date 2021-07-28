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
  header.addClass("fixed");
  logoImg.attr("src", logoSmallUrl);
  logoSource.attr("srcset", logoSmallUrl);
}

function showStickyHeader() {
  header.addClass("show");
}

function hideStickyHeader() {
  header.removeClass("show");
}

function destroyStickyHeader() {
  header.removeClass("fixed");
  logoImg.attr("src", logoMainUrl);
  logoSource.attr("srcset", logoMainUrl);
}

function showHero() {
  if ($(window).width() > 991) {
    $(".js-show-banner").removeClass("js-slide-top");
    setTimeout(function () {
      $(".js-show-title").removeClass("js-slide-top");
    }, 400);
    setTimeout(function () {
      $(".js-show-header").removeClass("js-slide-down");
    }, 800);
  } else {
    $(".js-show-banner").removeClass("js-slide-top");
    $(".js-show-title").removeClass("js-slide-top");
    $(".js-show-header").removeClass("js-slide-down");
  }
}

function showOnScroll(scrollValue) {
  $(".js-scroll").each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
    if (sectionPos < windowPos) {
      elem.removeClass("js-fadeIn js-slideLeft js-slideRight js-slideTop");
    }
  });
}

const humburger = $("#burger");
const headerMenu = $("#navbar");

function closeMenu() {
  humburger.addClass("collapsed");
  headerMenu.removeClass("show");
}

function setLastWord(text) {
  let n = text.split("");
  return n[n.length - 1];
}

$(document).ready(function () {
  initSupportSlider();
  initSupportSliderDown();
  initStepsSlider();
  slitText();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("body").scrollspy({
    target: "",
    offset: 200,
  });

  showHero();

  // init odometer numbers on scroll
  function numbersInit() {
    $(".odometer").each(function () {
      var counter = $(this);
      var num = counter.attr("data-num");
      counter.html(num);
      if (
        counter.offset().top - $(window).scrollTop() <
        $(window).height() / 1.2
      ) {
        counter.html(num);
      } else {
        return false;
      }
    });
  }
  let startPosition = 0;
  $(window).scroll(function () {
    let scrollValue = $(this).scrollTop();

    showOnScroll(scrollValue);

    scrollValue >= 1 ? closeMenu() : null;

    if (scrollValue > startPosition) {
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
    }
    startPosition = scrollValue;

    numbersInit();

    $(window).resize(function () {
      initSupportSlider();
      initSupportSliderDown();
      initStepsSlider();
      slitText();
    });
  });

  // SET POST DESCRIPTION LIMIT //
  function slitText() {
    if ($(window).width() < 991 && $(('.team-box').length > 0)) {
      $(".team-box").each(function () {
        const limit = 200;
        let post = $(this);
        let text = post.find(".team-box__article p").text();
        let label = post.find(".team-box__article").attr("data-more-label");
        let url = post.find(".team-box__article").attr("data-more-link");

        if (text.length > limit) {
          let newText = text.substr(0, limit);
          var finalText =
            newText.substr(0, limit - setLastWord(newText).length)+"... <br>" +
            '<a class="link_arrow" href="' +
            url +
            '">' +
            label +
            "</a>";
        }
        // finalText.addClass(".link_arrow")
        post.find(".team-box__article p").html(finalText);
      });
    }
  }


  // slow scroll to id
  $('.list-group-item[href^="#"]').on("click", function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 90,
      },
      1400
    );
  });

  if ($(".help-box").length > 0) {
    $('.help-box[href^="#"]').on("click", function () {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 90,
        },
        1400
      );
    });
  }
});

$("#testimonialsSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $("#testimonialsPrev"),
  nextArrow: $("#testimonialsNext"),
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});

$("#examSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $("#examPrev"),
  nextArrow: $("#examNext"),
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});
$("#partnerSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  fade: true,
  speed: 1000,
  cssEase: "linear",
  autoplaySpeed: 10000,
  adaptiveHeight: true,
});
$("#charitySlider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  rows: 1,
  slidesPerRow: 1,
  mobileFirst: true,
  arrows: true,
  prevArrow: $("#charityPrev"),
  nextArrow: $("#charityNext"),
  responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        rows: 2,
        slidesToShow: 2,
        slidesPerRow: 2,
      },
    },
  ],
});

$("#videoSlider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrows: true,
  prevArrow: $("#videoPrev"),
  nextArrow: $("#videoNext"),
  fade: false,
  speed: 400,
  cssEase: "linear",
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
    },
  }, ],
});

function initPartnersSlider() {
  const partnerSlider = document.querySelector("#partnerSlider.slick-slider");
  if ($(window).width() < 991 && !partnerSlider) {
    $("#partnerSlider").slick({
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
          settings: "unslick",
        },
        {
          breakpoint: 180,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    });
  }
}

function initStepsSlider() {
  const supportSlider = document.querySelector("#stepsSlider.slick-slider");

  if ($(window).width() < 991 && !supportSlider) {
    $("#stepsSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      mobileFirst: true,
      // verticalSwiping: true,
      responsive: [{
        breakpoint: 991,
        settings: "unslick",
      }, ],
    });
  }
}

function initSupportSlider() {
  const supportSlider = document.querySelector("#supportSlider.slick-slider");

  if ($(window).width() < 767) {
    $("#supportSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [{
        breakpoint: 768,
        settings: "unslick",
      }, ],
    });
  }
}

function initSupportSliderDown() {
  const supportSlider = document.querySelector(
    "#supportSliderDown.slick-slider"
  );

  if ($(window).width() < 767 && !supportSlider) {
    $("#supportSliderDown").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [{
        breakpoint: 768,
        settings: "unslick",
      }, ],
    });
  }
}
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