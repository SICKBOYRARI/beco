$(function () {
  $(".navbar__burger").click(function (event) {
    $(".navbar").toggleClass("active-btn");
    $("body").toggleClass("lock");
  });
});
