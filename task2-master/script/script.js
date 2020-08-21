$(document).ready(function () {
   $('a.anchor').click(function (e) {
      e.preventDefault();
      var elClick = $(this).attr('href');
      var dest = $(elClick).offset().top;
      $('html:not(:animated),body:not(:animated)').animate({ scrollTop: dest }, 1000);
   })
})