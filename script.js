// tab

function openCity(evt, cityName) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

document.getElementById("defaultOpen").click();
  
// slick-slider-1

$(document).ready(function(){
  $('.slick-items').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      dots: true,
      autoplay: true,
      vertical: true,
      nextArrow: ('.next'),
      prevArrow: ('.prev'),
  });
});

// slick-slider-1
  
// slick-slider-2

$(document).ready(function(){
  $('.delhi-slider').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      dots: true,
      autoplay: true,
      nextArrow: ('.next'),
      prevArrow: ('.prev'),
  });
});

// slick-slider-2
  
// slick-slider-3

$(document).ready(function(){
  $('.mumbai-slider').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      dots: true,
      autoplay: true,
      nextArrow: ('.next'),
      prevArrow: ('.prev'),
  });
});

// slick-slider-3
  
// slick-slider-4

$(document).ready(function(){
  $('.old-mery-slider').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      dots: true,
      autoplay: true,
      nextArrow: ('.next'),
      prevArrow: ('.prev'),
  });
});

// slick-slider-4
  
// slick-slider-5

$(document).ready(function(){
  $('.xaviers-slider').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      dots: true,
      autoplay: true,
      nextArrow: ('.next'),
      prevArrow: ('.prev'),
  });
});

// slick-slider-5


// Q-n-A

$(document).ready(function(){
  $(".ans").hide();
});

$(document).ready(function(){
  $("#outer1").click(function(){
    $("#ans1").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#outer2").click(function(){
    $("#ans2").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#outer3").click(function(){
    $("#ans3").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#outer4").click(function(){
    $("#ans4").slideToggle("slow");
  });
});

// Q-n-A