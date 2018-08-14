"use strict";

$(function() {
    $('.toggle').click(function() {
        $('.nav-item').toggleClass('slide-out');
        $('.hamburger-1').toggleClass('cross-right');
        $('.hamburger-2').toggleClass('cross-hide');
        $('.hamburger-3').toggleClass('cross-left');
        $('.wobble').addClass('ripple');
        setTimeout(function(){
            $('.wobble').removeClass('ripple');
        }, 1000);
    });
});

function scrollNav() {
    $('a').click(function(){ $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();