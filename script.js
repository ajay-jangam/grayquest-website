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