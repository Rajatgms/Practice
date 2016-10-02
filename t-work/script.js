'use strict';
$(document).ready(function () {
    // on scroll highlight navigation bar
    function navBarHighlight () {
        var windowScrollPositionTop = $(window).scrollTop(),
            navbar = $('#navbar');
        if(windowScrollPositionTop > 0 ){
            navbar.addClass('navbar-black');
        } else {
            navbar.removeClass('navbar-black');
        }
    };
    // add remove css active class from navigation menu items
    function navBarMenuItemSelection() {
        $(this).parents('ul').find('a').removeClass('active');
        $(this).addClass('active');
    }
    // update selected menu item on scroll and resize window
    function navBarMenuItemSelectionOnScrollResize() {
        var sectionHomeTop = $('#section-home').position().top,
            sectionStrengthTop = $('#section-strength').position().top,
            sectionClientTop = $('#section-client').position().top,
            sectionContactTop = $('#section-contact').position().top,
            windowScrollPositionTop = $(window).scrollTop(),
            navBarItems = $('#navbar-items').find('li a');

        // remove active class from menu items
        navBarItems.removeClass('active');

        switch (true){
            case windowScrollPositionTop < sectionStrengthTop :
                $(navBarItems[0]).addClass('active');
                break;
            case windowScrollPositionTop < sectionClientTop:
                $(navBarItems[1]).addClass('active');
                break;
            case windowScrollPositionTop < sectionContactTop:
                $(navBarItems[2]).addClass('active');
                break;
            default:
                $(navBarItems[3]).addClass('active');
        }
    };
    // submit query function
    function submitForm() {
        $('#alert').show();
        setTimeout(function () {
            $('#alert').hide();
        }, 2000);
        $(this)[0].reset();
        return false;
    }
    // client detail display function
    function showCaseClientDetail() {
        $('#clientDetails > div').removeClass('active');
        $(this).parent().addClass('active');
    }
    // bind event handler on window scroll and resize
    $(window).on('scroll resize', function () {
        navBarHighlight();
        navBarMenuItemSelectionOnScrollResize();
    });
    // bind event handler for adding removing active class on click of menu items
    $('#navbar-items').on('click', 'li a', navBarMenuItemSelection);
    // bind event handler for query form submission
    $('#queryForm').submit(submitForm);
    $('#clientDetails').on('click', 'a', showCaseClientDetail);
    (function init() {
        navBarHighlight();
        navBarMenuItemSelectionOnScrollResize();
    })();
});