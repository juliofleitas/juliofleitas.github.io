function backToTop() {
  let button = $(".button-up");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 100) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });
}

backToTop();
