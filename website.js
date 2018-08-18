"use strict";

$('#body').addClass('hide');

$(document).ready(function() {
    var counter = 0;
    setInterval(function() {
        if(counter == 4) {
            $('#body').removeClass('hide').addClass('show');
            $('.loader').addClass('hide');
            // changeImage(counter);
            // counter++;
        } else if (counter == 4) {
            $('.loader').addClass('hide');
        } else {
            changeImage(counter);
            counter++;
        }
    }, 2000);
});

function changeImage(counter) {
    var images = [
        '<i class="fab fa-codepen"></i>',
        '<i class="fa fa-cubes"></i>',
        '<i class="fas fa-code"></i>',
        '<i class="far fa-file-code"></i>',
        '<i class="fas fa-cube"></i>',
        '<i class="fab fa-html5"></i>',
        '<i class="fab fa-css3-alt"></i>',
        '<i class="fab fa-js-square"></i>',
        '<i class="fab fa-react"></i>',
        '<i class="fab fa-java"></i>',
        '<i class="fas fa-cloud-download-alt"></i>',
    ];
    $(".loader .image").html(""+ images[counter] +"");
}

$('.intro').addClass('go');

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

$(".project-buttons").removeClass("box-shadowing");

$(".project-buttons").mouseenter(function () {
    $(this).addClass("box-shadowing");
});
$(".project-buttons").mouseout(function () {
    $(this).removeClass("box-shadowing");
});


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function(event) {

    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});