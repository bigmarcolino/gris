/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery da função de scroll da página - requer jQuery Easing
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Marca o nav quando o scroll acontece
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Fecha o menu responsivo ao clicar no item do menu
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});