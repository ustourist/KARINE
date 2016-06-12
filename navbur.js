$(function(){
  $('.burbtn').click(function(){
  	$('.mm').fadeToggle(50);
  	$('.rr').fadeToggle(50);
    $('.logosmall').siblings().fadeToggle(200);
    $('.logosmall').siblings().delay(800).toggleClass('limove');
  });
});
