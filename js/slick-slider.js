$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    speed: 1400,
    dots: true,
    arrows: false,
    fade: true,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 1000,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-news").slick({
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    speed: 1400,
    arrows: true,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
