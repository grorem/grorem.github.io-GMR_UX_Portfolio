var fader = $('.fader');
var naver = $('.navFader');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   fader.css({ 'opacity' : (1 - st/700) });
   naver.css({ 'opacity' : (0 - st/-900) });
});


$(function() {
    $('.gallery1').mouseenter(function(event){

        $('.seeit1').slideDown(200);

    });




});

$(function() {
  var i = 1;

  $("#galleryNext").click(function(){

if(i < 5){
    $(".Project_"+i).fadeOut(0);
      i++;
        $(".Project_"+i).fadeIn(400);
    };

  });

  $("#galleryPrev").click(function(){

if(i > 1){
    $(".Project_"+i).fadeOut(0);
      i--;
        $(".Project_"+i).fadeIn(400);
    };

  });

});


$(function() {
  var j = 1;

  $("#timelineNext").click(function(){

if(j < 2){
    $(".timeline_"+j).fadeOut(0);
      j++;
        $(".timeline_"+j).fadeIn(0);
    };

  });

  $("#timelinePrev").click(function(){

if(j > 1){
    $(".timeline_"+j).fadeOut(0);
      j--;
        $(".timeline_"+j).fadeIn(0);
    };

  });

});




$(function() {
    $('.gallery1').mouseleave(function(event){

        $('.seeit1').slideUp(200);

    });




});



$(function() {
    $('.gallery2').mouseenter(function(event){

        $('.seeit2').slideDown(200);

    });




});


$(function() {
    $('.gallery2').mouseleave(function(event){

        $('.seeit2').slideUp(200);

    });




});



 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 500);
        return false;
      }
    }
  });
});







$(function(){
    $(".extoggle").click(function(){


        $(this).fadeOut(10);
        $('.extoggled').delay(10).fadeIn();

        $('.hider').fadeOut(60);
        $('.shower').delay(60).fadeIn();



    });
});


$(function(){
    $(".extoggled").click(function(){


        $(this).fadeOut(10);
        $('.extoggle').delay(10).fadeIn();

        $(this)
        $('.shower').fadeOut(60);
        $('.hider').delay(60).fadeIn();




    });
});










$(function(){
    $(".menu").click(function(){


        $('.mobileNavigation').fadeIn();


    });
});



$(function(){
    $(".navular").children().click(function(){


        $('.navular').children().addClass('active');


    });
});



$(function(){
    $(".topper").click(function(){


        $('.mobileNavigation').fadeOut();


    });
});


$(function(){
    $(".mobileNavigation a").click(function(){


        $('.mobileNavigation').fadeOut();


    });



    $('#gallery2').rebox({ selector: 'a' });
    $('#galleryGranada').rebox({ selector: 'a' });
    $('#gallerySJ').rebox({ selector: 'a' });
    $('#galleryMatagalpa').rebox({ selector: 'a' });





});
