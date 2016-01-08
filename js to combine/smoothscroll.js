$(document).ready(function(){
  $('a[href*="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var headerHeight = 0;

       if ($(window).width() > 768){
          headerHeight = $('#header').outerHeight();
        }


      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - headerHeight
      }, 900, 'swing'); 
  });
});
