// JQuery
// menu drop down function
$(function () {
    $('.selection > li').hover(function () {
        $(this).find('ul.child').stop().show(250);
    }, function () {
        $(this).find('ul.child').stop().hide(200);
    });
});

// Hiding phone number
$('.phone-num').hide();

// Hide phone icon and show phone number
$(function () {
    $('#phone-contact').hover(function () {
        $(this).find('#nav-icon, .phone-num').stop().toggle(200);
    });
});

// Hiding download icon
$('.resume-description').hide();

// Hide Resume text and show download icon
$(function () {
    $('#resume-dwnld').hover(function () {
        $(this).find('.resume-description, #nav-icon').stop().toggle(200);
    });
});

// Hiding email text
$('.email-addr').hide();

// Hide email icon and show email text
$(function () {
    $('#email-contact').hover(function () {
        $(this).find('#nav-icon, .email-addr').stop().toggle(200);
    });
});