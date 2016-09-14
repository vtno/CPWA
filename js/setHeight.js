height = 600
$(document).ready(function(){
  $('.cpm').css('height', height+'px');
  $('.right-col').css('height', height+'px');
  $('button').on('click', function(){
    $('.tooltip-image').hide();
  });
});
