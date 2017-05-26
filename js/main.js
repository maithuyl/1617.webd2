// slide out menu
$(function(){

    var menuState = false; 

    var openMenu = function() {
        $('.menu').animate({
            left: "0"
        }, 1000);
    }

    var closeMenu = function() {
        $('.menu').animate({
            left: "-18em"
        }, 1000);
    }

    $(document).ready(function(){
        $('.hamburgerContainer').on('click', function() {
            if(!menuState) {
                openMenu();
                menuState = true;
            } else {
                closeMenu();
                menuState = false;
            }
        });
    }); 
}); 


//zoom function on projects


$(document).ready(function(){
    $('.imgZoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });


						