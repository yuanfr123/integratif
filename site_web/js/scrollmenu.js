$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.navig').addClass('navig2');
        } else {
            $('.navig').removeClass('navig2');
        }
    });
});