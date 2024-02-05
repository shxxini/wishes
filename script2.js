$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").css("z-index","2").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").css("z-index","1").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });