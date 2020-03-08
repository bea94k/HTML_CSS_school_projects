document.addEventListener("DOMContentLoaded", function() {
  // message us - button
  document
    .getElementsByClassName("msg-btn")[0]
    .addEventListener("click", function() {
      alert(
        "Thank you for trying to contact us! We're reading your mind hence to message window opening, no worries, we'll answer you soon :)"
      );
    });

  // out - button
  $(".out").on("click", function() {
    alert("You wish. There's no way out of the woods.");
  });

  // back to top button
  var topBtn = $(".top-btn");

  // - btn appears and disappears depending on scroll from top

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      topBtn.addClass("show");
    } else {
      topBtn.removeClass("show");
    }
  });

  // - scrolling up
  topBtn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "100");
  });

  // mobile menu - click on icon shows and hides menu list
  $(".side-btn").on("click", function() {
    if ($(".side-menu").hasClass("show") === false) {
      $(".side-menu").removeClass("hide");
      $(".side-menu").addClass("show");
    } else {
      $(".side-menu").removeClass("show");
      $(".side-menu").addClass("hide");
    }
  });

  // trying to make it work: hide side menu when clicking anywhere (menu icon, links in side menu or anywhere else on the site/screen)
  /* $(".side-btn").on("click", function() {
    if ($(".side-menu").hasClass("hide")) {
      $(".side-menu").removeClass("hide");
      $(".side-menu").addClass("show");
    } else {
      $(document).on("click", function() {
        $(".side-menu").removeClass("show");
        $(".side-menu").addClass("hide");
      });
    }
  }); */
});
