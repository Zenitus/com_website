$(function () {
  $(".japlang").each(function (i) {
    $(this).hide();
  });
  $(".japlangmenu").each(function (i) {
    $(this).hide();
  });
  $(".japlanglink").on("click", function () {
    $(".japlang").each(function (id) {
      $(this).hide();
    });
    $(".englang").each(function (id) {
      $(this).show();
    });
    $(".japlangmenu").each(function (id) {
      $(this).hide();
    });
    $(".englangmenu").each(function (id) {
      $(this).show();
    });
    return false;
  });
  $(".englanglink").on("click", function () {
    $(".englang").each(function (id) {
      $(this).hide();
      $(this).css("display", "none");
    });
    $(".japlang").each(function (id) {
      $(this).show();
      $(this).css("display", "block");
    });
    $(".englangmenu").each(function (id) {
      $(this).hide();
      $(this).css("display", "none");
    });
    $(".japlangmenu").each(function (id) {
      $(this).show();
      $(this).css("display", "flex");
    });
    return false;
  });
});
