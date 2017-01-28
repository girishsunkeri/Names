$(document).ready(function () {
  $(".nm-tab-register").click(function (event) {
    $(".nm-signin-cnt").hide();
    $(".nm-register-cnt").show();
  });

  $(".nm-tab-signin").click(function (event) {
    $(".nm-register-cnt").hide();
    $(".nm-signin-cnt").show();
  });
});
