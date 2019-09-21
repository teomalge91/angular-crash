// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    if(window.innerWidth>window.innerHeight){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
});

//funzione che nasconde il loader quando la pagina è completamente caricata
$(window).on("load", function (e) {
    // Animate loader off screen
    $(".loader-container").fadeOut("slow");
  });

$(document).ready(function () {
    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function () {
        $('nav').toggleClass('navbar-no-bg');
    });
});

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
    return;
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
        $('.animated-icon').removeClass('open'); //icona hamburger menu torna chiusa
    });
});


// toggle classe "navbar-no-bg" se la pagina è stata scollata
$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 50) {
            $('.navbar').removeClass('navbar-no-bg');
        } else {
            $('.navbar').addClass('navbar-no-bg');
        }
    });
});

function openRestaurantDirections(){
    var params = 'destination=Via+Imbarcadero+3+23827+Lierna&travelmode=driving';
    openDirections(params);
}

function openChurchDirections(){
    var params = 'destination=Piazza+S.+Ambrogio+23013+Cosio+Valtellino&travelmode=driving';
    openDirections(params);
}

function openDirections(params){
    window.open(
        'https://maps.google.com/maps/dir/?api=1&' + params,
        '_blank' // <- This is what makes it open in a new window.
      );
}