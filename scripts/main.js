var weddingday = new Date(2020, 05, 20, 15, 00);
var timing = setInterval(
    function () {
        var currentDate = new Date().getTime();
        var timeLeft = weddingday - currentDate;
        if (timeLeft > 0){
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
            document.getElementById("days").innerHTML = days;
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
            document.getElementById("hours").innerHTML = hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
            document.getElementById("minutes").innerHTML = minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
            document.getElementById("seconds").innerHTML = seconds;
        }
        else{
            clearInterval(timing);
            document.getElementById("countdown-section").style.display = "none";
        }
    }, 1000);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//scroll down
$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });