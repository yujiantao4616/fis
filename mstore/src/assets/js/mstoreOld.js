$(document).ready(function() {
var a, b, c;
$(window).scroll(function() {
  a = $(document).scrollTop();
  b =
    $("#menu").height() +
    $("#myCarousel").height() +
    $(".ms-news-model").height() +
    $(".banner").height() +
    20;
  c = $("#carousel-example-generic").height() + 60;
  a >= b &&
    ($(".topDiv").show(),
    $("#top").show(),
    $(".model-all").addClass("navbar-fixed-top"),
    $(".container-fluid").css("padding", "0px 30px"),
    $(".model-filter").addClass("fixed-filter"));
  a >= c &&
    ($("#orderby-all").addClass("navbar-fixed-top"),
    $(".ms-mstore-show-div").show());
  1800 < a
    ? $(".btn-group-vertical").fadeIn()
    : $(".btn-group-vertical").fadeOut();
  a < c &&
    ($("#orderby-all").removeClass("navbar-fixed-top"),
    $(".ms-mstore-show-div").hide());
  a < b &&
    ($(".topDiv").hide(),
    $("#top").hide(),
    $(".model-all").removeClass("navbar-fixed-top"),
    $(".container-fluid").css("padding", "0px 15px"),
    $(".model-filter").removeClass("fixed-filter"));
});
$(window).scroll(function() {
  $(document).scrollTop();
  $(this).scrollTop();
  $(this).height();
});
});
function goTop() {
$("html,body").animate({ scrollTop: 0 }, 500);
}
