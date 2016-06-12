$(function(){

    var picSrc = '';

    $('.shoede > img').click(function(){

      picSrc = $(this).attr('src');
      event.preventDefault();

      $('.mm').toggle();
      $('.rr').toggle();
      $('footer').toggle();  

      $('.lightboxx img').attr('src', picSrc);
      $('.lightboxx').toggle();

    });

  });



  $(function(){

    $('.lightboxx').click(function(){

      event.preventDefault();

      $(this).toggle();
      $('.mm').toggle();
      $('.rr').toggle();
      $('footer').toggle();

    });

  });



  $(function(){
    var li_index = 0;                    

    var li_count = $('.shoedebox li').length;  

    var li_width = $('.shoebbslider').width(); 

    var picSrc = '';
    var moveSpeed = 600;
    

    $('.shoedebox').width( li_count*li_width ); //用程式設定.pic的寬度

    $('.shoemmsli li').eq(li_index).addClass('active');

    $('.shoemmsli li').click(function(){

      li_index = $(this).index();



      $(this).addClass('active').siblings().removeClass();
      $('.shoedebox').animate({left: li_index*li_width*-1});
    })

    $('.arri').click(
      function(){
        $('.shoemmsli li').removeClass('active');

        if( li_index == 2 ){
        li_index = 0;
        }else{
          li_index++;
        }
        event.preventDefault();
        $('.shoemmsli li').eq(li_index).addClass('active');
        $('.shoedebox').stop(true,false).animate({left: li_index*li_width*-1});
        
    })

    $('.arle').click(
      function(){
        $('.shoemmsli li').removeClass('active');

        if( li_index == 0 ){
        li_index = 2;
        }else{
          li_index--;
        }
        event.preventDefault();
        $('.shoemmsli li').eq(li_index).addClass('active');
        $('.shoedebox').stop(true,false).animate({left: li_index*li_width*-1});
    })
  });