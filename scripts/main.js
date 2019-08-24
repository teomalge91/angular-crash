//funzione per cambiare icona al click sull'hamburger menu
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
  });

//funzione per il countdown
var weddingday = new Date(2020, 05, 20, 15, 00);
var timing = setInterval(
    function () {
        var currentDate = new Date().getTime();
        var timeLeft = weddingday - currentDate;
        if (timeLeft > 0) {
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
            document.getElementById("days").innerHTML = days;
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
            document.getElementById("hours").innerHTML = hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
            document.getElementById("minutes").innerHTML = minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
            document.getElementById("seconds").innerHTML = seconds;
        }
        else {
            clearInterval(timing);
            document.getElementById("countdown-section").style.display = "none";
        }
    }, 1000);

window.onscroll = function () { scrollFunction() };

//mostra / nasconde bottone go to top
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}
//al click sul top button, riporta in cima
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 350, 'linear');
}

//funzione per l'animazione di scroll al click su un link 
$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 350, 'linear');
    });
});


//Aggiunge / toglie classe solid se la pagina è stata scollata
$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});