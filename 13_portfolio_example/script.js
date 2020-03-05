jQuery(document).ready(function() {
  
    var topBtn = $('.to-top-btn');

    if ($(window).scrollTop() <= 300) {
        topBtn.css('display', 'none');
    }
    
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        topBtn.fadeIn(500);
      } else {
        topBtn.fadeOut(500);
      }
    });
  
    topBtn.on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop:0}, '1000');
    });
  
});